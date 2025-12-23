from typing import Literal, Final
from collections import deque

CellPosition = list[int]

SantaCell = Literal["S"]
HouseCell = Literal["G"]
FreeCell = Literal["."]
ObstacleCell = Literal["#"]
MapCell = SantaCell | HouseCell | FreeCell | ObstacleCell


def fn(map: list[list[MapCell]]) -> int:
    SANTA_CELL: Final[SantaCell] = "S"
    HOUSE_CELL: Final[HouseCell] = "G"
    OBSTACLE_CELL: Final[ObstacleCell] = "#"

    santa_pos: CellPosition = [-1, -1]
    for i, row in enumerate(map):
        try:
            j = row.index(SANTA_CELL)
            santa_pos[0] = i
            santa_pos[1] = j
        except ValueError:
            continue

    min_steps_to_houses = 0

    queue = deque[tuple[CellPosition, int]]()  #
    queue.append(([*santa_pos], 0))

    visited_houses = set[str]()
    visited_positions = set[str]([f"{santa_pos[0]}-{santa_pos[1]}"])

    while len(queue):
        [current, steps] = queue.popleft()
        neighbor_positions: list[CellPosition] = []

        # Left.
        if current[1] - 1 > -1:
            neighbor_positions.append([current[0], current[1] - 1])

        # Right.
        if current[1] + 1 < len(map[0]):
            neighbor_positions.append([current[0], current[1] + 1])

        # Up.
        if current[0] - 1 > -1:
            neighbor_positions.append([current[0] - 1, current[1]])

        # Down.
        if current[0] + 1 < len(map):
            neighbor_positions.append([current[0] + 1, current[1]])

        for [row, col] in neighbor_positions:
            cell_char = map[row][col]

            if cell_char != OBSTACLE_CELL and not f"{row}-{col}" in visited_positions:
                queue.append(([row, col], steps + 1))
                visited_positions.add(f"{row}-{col}")

                if cell_char == HOUSE_CELL:
                    min_steps_to_houses += steps + 1
                    visited_houses.add(f"{row}-{col}")

    for i, row in enumerate(map):
        for j, col in enumerate(row):
            if col == HOUSE_CELL and not f"{i}-{j}" in visited_houses:
                return -1

    return min_steps_to_houses
