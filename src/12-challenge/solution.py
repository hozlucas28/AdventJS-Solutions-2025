from typing import TypedDict, Literal, Callable, Dict, cast

Elf = TypedDict("Elf", {"actions": str, "life_points": int})

Action = Literal["A", "B", "F"]
ActionResponse = Callable[[int, Action], int]


def fn(elf1: str, elf2: str) -> int:
    elf01: Elf = {"actions": elf1, "life_points": 3}
    elf02: Elf = {"actions": elf2, "life_points": 3}

    action_responses: Dict[Action, ActionResponse] = {
        "A": lambda victim_life_points, victim_counter_action: (
            victim_life_points
            if victim_counter_action == "B"
            else victim_life_points - 1
        ),
        "B": lambda victim_life_points, _: victim_life_points,
        "F": lambda victim_life_points, _: victim_life_points - 2,
    }

    min_actions_length = min(len(elf01["actions"]), len(elf02["actions"]))

    for action_i in range(min_actions_length):
        if not elf01["life_points"] or not elf02["life_points"]:
            break

        elf01_action = cast(Action, elf01["actions"][action_i])
        elf02_action = cast(Action, elf02["actions"][action_i])

        elf02["life_points"] = action_responses[elf01_action](
            elf02["life_points"], elf02_action
        )
        elf01["life_points"] = action_responses[elf02_action](
            elf01["life_points"], elf01_action
        )

    if elf01["life_points"] > elf02["life_points"]:
        return 1

    return 2 if elf02["life_points"] > elf01["life_points"] else 0
