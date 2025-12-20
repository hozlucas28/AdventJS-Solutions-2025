from typing import Literal, Final

Gift = Literal["#"]
EmptySlot = Literal["."]
WarehouseCell = Gift | EmptySlot


def fn(
    warehouse: list[list[WarehouseCell]], drops: list[int]
) -> list[list[WarehouseCell]]:
    GIFT: Final[Gift] = "#"
    EMPTY_SLOT: Final[EmptySlot] = "."

    new_warehouse: list[list[WarehouseCell]] = warehouse.copy()

    for drop in drops:
        level = 0
        while level < len(new_warehouse) and new_warehouse[level][drop] == EMPTY_SLOT:
            level += 1

        level -= 1
        if level > -1 and level < len(new_warehouse):
            new_warehouse[level][drop] = GIFT

            if all(cell == GIFT for cell in new_warehouse[level]):
                new_warehouse.insert(0, [EMPTY_SLOT] * len(new_warehouse[level]))
                new_warehouse.pop(level + 1)

    return new_warehouse
