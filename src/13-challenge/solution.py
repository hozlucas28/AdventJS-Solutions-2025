from typing import Literal, Callable, Dict, Final, cast


Cell = Literal[">", "<", "^", "v", "."]
Result = Literal["completed", "broken", "loop"]

Movements = Dict[Cell, Callable[[], None]]


def fn(factory: list[str]) -> Result:
    gift: list[int] = [0, 0]
    gift_path: set[str] = set()

    def move_right():
        gift[1] += 1

    def move_left():
        gift[1] -= 1

    def move_up():
        gift[0] -= 1

    def move_down():
        gift[0] += 1

    movements: Final[Movements] = {
        ">": move_right,
        "<": move_left,
        "^": move_up,
        "v": move_down,
    }

    rows: Final = len(factory)
    cols: Final = len(factory[0]) if factory[0] else 0

    while gift[0] > -1 and gift[0] < rows and gift[1] > -1 and gift[1] < cols:
        movement = cast(Cell, factory[gift[0]][gift[1]])
        if movement == ".":
            return "completed"

        gift_path.add(f"[{gift[0]}, {gift[1]}]")

        movements[movement]()
        if f"[{gift[0]}, {gift[1]}]" in gift_path:
            return "loop"

    return "broken"
