from typing import Literal, Callable, cast

Instruction = Literal[">", "+", "-", "[", "]", "{", "}"]


def fn(code: str) -> int:
    result = 0
    position = 0

    def next_position():
        nonlocal position
        position += 1

    def increment():
        nonlocal result
        nonlocal position
        result += 1
        position += 1

    def decrement():
        nonlocal result
        nonlocal position
        result -= 1
        position += 1

    def loop_start():
        nonlocal position
        if not result:
            position = code.find("]", position)
        position += 1

    def loop_end():
        nonlocal position
        position = code.rfind("[", 0, position)

    def conditional_start():
        nonlocal position
        if not result:
            position = code.find("}", position)
        position += 1

    def conditional_end():
        nonlocal position
        position += 1

    instruction_actions: dict[Instruction, Callable[[], None]] = {
        ">": next_position,
        "+": increment,
        "-": decrement,
        "[": loop_start,
        "]": loop_end,
        "{": conditional_start,
        "}": conditional_end,
    }

    while position < len(code):
        instruction = cast(Instruction, code[position])
        instruction_actions[instruction]()

    return result
