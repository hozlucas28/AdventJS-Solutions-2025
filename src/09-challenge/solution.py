from typing import Literal, Dict, Tuple, Callable

Move = Literal["L", "R", "U", "D"]
Result = Literal["fail", "crash", "success"]

MoveActions = Dict[Move, Callable[[int, int], Tuple[int, int]]]


def fn(board: str, moves: str) -> Result:
    _board = list(list(row) for row in board.strip().split("\n"))

    robot_x: int = -1
    robot_y: int = -1

    for y, row in enumerate(_board):
        for x, col in enumerate(row):
            if col == "@":
                robot_x = x
                robot_y = y

    move_actions: MoveActions = {
        "L": lambda x, y: (x - 1, y),
        "R": lambda x, y: (x + 1, y),
        "U": lambda x, y: (x, y - 1),
        "D": lambda x, y: (x, y + 1),
    }

    for move in moves:
        next_robot_coords = move_actions[move](robot_x, robot_y)  # type: ignore

        if (
            next_robot_coords[0] < 0
            or next_robot_coords[0] >= len(_board[0])
            or next_robot_coords[1] < 0
            or next_robot_coords[1] >= len(_board)
            or _board[next_robot_coords[1]][next_robot_coords[0]] == "#"
        ):
            return "crash"

        _board[robot_y][robot_x] = "."

        robot_x = next_robot_coords[0]
        robot_y = next_robot_coords[1]

        if _board[robot_y][robot_x] == "*":
            return "success"

        _board[robot_y][robot_x] = "@"

    return "fail"
