from typing import Literal
import re

Light = Literal[".", "R", "G"]


def fn(board: list[list[Light]]) -> bool:
    for horizontal_line in board:
        has_four_horizontal_lights = re.search("R{4}|G{4}", "".join(horizontal_line))
        if has_four_horizontal_lights:
            return True

    for i in range(len(board[0])):
        vertical_line = board[0][i]
        for j in range(1, len(board)):
            vertical_line += board[j][i]

        has_four_vertical_lights = re.search("R{4}|G{4}", vertical_line)
        if has_four_vertical_lights:
            return True

    return False
