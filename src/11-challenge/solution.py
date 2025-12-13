from typing import Final


def fn(warehouse: list[str]) -> int:
    gift: Final = "*"
    camera: Final = "#"
    unattended_gifts = 0

    for row_i, row in enumerate(warehouse):
        up_row = warehouse[row_i - 1] if (row_i - 1) > -1 else "." * len(row)
        down_row = (
            warehouse[row_i + 1] if (row_i + 1) < len(warehouse) else "." * len(row)
        )

        for col_i, col in enumerate(row):
            if col != gift:
                continue

            up_cell = up_row[col_i]
            down_cell = down_row[col_i]

            left_cell = row[col_i - 1] if (col_i - 1) > -1 else "."
            right_cell = row[col_i + 1] if (col_i + 1) < len(row) else "."

            cardinal_cells = [up_cell, down_cell, left_cell, right_cell]

            unattended_gifts += camera not in cardinal_cells

    return unattended_gifts
