from typing import Literal
import re

Light = Literal[".", "R", "G"]


def fn(board: list[list[Light]]) -> bool:
    rows = len(board)
    cols = len(board[0])
    if rows < 4 and cols < 4:
        return False

    # Horizontal
    for row in board:
        horizontal_line = "".join(row)
        if re.match("R{4}|G{4}", horizontal_line):
            return True

    # Vertical
    for col in range(cols):
        vertical_line = ""
        for row in range(rows):
            vertical_line += board[row][col]

        if re.match("R{4}|G{4}", vertical_line):
            return True

    # Left diagonal and right diagonal
    for row in range(rows - 3):
        for col in range(cols - 3):
            left_diagonal_line = ""
            for i in range(4):
                left_diagonal_line += board[row + i][col + i]

            if re.match("R{4}|G{4}", left_diagonal_line):
                return True

            right_diagonal_line = ""
            for i in range(4):
                right_diagonal_line += board[row + i][col + 3 - i]

            if re.match("R{4}|G{4}", right_diagonal_line):
                return True

    return False
