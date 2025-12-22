from typing import Literal, Final
from collections import deque

CellPosition = list[int]

SantaCell = Literal["S"]
ExitCell = Literal["E"]
FreeCell = Literal["."]
WallCell = Literal["#"]
MazeCell = SantaCell | ExitCell | FreeCell | WallCell


def fn(maze: list[list[MazeCell]]) -> bool:
    SANTA_CELL: Final[SantaCell] = "S"
    EXIT_CELL: Final[ExitCell] = "E"
    WALL_CELL: Final[WallCell] = "#"

    can_reach_exit = False

    santa_pos: CellPosition = [-1, -1]
    for i, row in enumerate(maze):
        try:
            j = row.index(SANTA_CELL)
            santa_pos[0] = i
            santa_pos[1] = j
        except ValueError:
            continue

    queue = deque[CellPosition]([santa_pos])
    visited_positions = set[str]([f"{santa_pos[0]}-{santa_pos[1]}"])

    while len(queue) and not can_reach_exit:
        current = queue.popleft()
        neighbor_positions: list[CellPosition] = []

        # Left
        if current[1] - 1 > -1:
            neighbor_positions.append([current[0], current[1] - 1])

        # Right
        if current[1] + 1 < len(maze[0]):
            neighbor_positions.append([current[0], current[1] + 1])

        # Up
        if current[0] - 1 > -1:
            neighbor_positions.append([current[0] - 1, current[1]])

        # Down
        if current[0] + 1 < len(maze):
            neighbor_positions.append([current[0] + 1, current[1]])

        for _, [row, col] in enumerate(neighbor_positions):
            cell_char = maze[row][col]

            if cell_char != WALL_CELL and (f"{row}-{col}") not in visited_positions:
                queue.append([row, col])
                visited_positions.add(f"{row}-{col}")

                if cell_char == EXIT_CELL:
                    can_reach_exit = True
                    break

    return can_reach_exit
