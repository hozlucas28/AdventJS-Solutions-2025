from typing import TypedDict, Literal

Glove = TypedDict("Glove", {"hand": Literal["L", "R"], "color": str})

GlovesGroupByColor = dict[
    str, TypedDict("GlovesGroupByColor", {"left": int, "right": int})
]


def fn(gloves: list[Glove]) -> list[str]:
    gloves_group_by_color: GlovesGroupByColor = {}

    for glove in gloves:
        color = glove["color"]
        hand = glove["hand"]

        if not color in gloves_group_by_color:
            gloves_group_by_color[color] = {"left": 0, "right": 0}

        gloves_group_by_color[color]["left"] += hand == "L"
        gloves_group_by_color[color]["right"] += hand == "R"

    pair_of_gloves: list[str] = []

    for entry in gloves_group_by_color.items():
        color = entry[0]
        hands = gloves_group_by_color[color]
        pairs = min(hands["left"], hands["right"])

        if pairs:
            pair_of_gloves.extend([color] * pairs)

    return pair_of_gloves
