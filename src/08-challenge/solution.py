from typing import TypedDict

CharCounter = TypedDict("CharCounter", {"char": str, "amount": int})


def fn(toy: str) -> str:
    char_counters: list[CharCounter] = []

    for char in toy:
        index = -1
        for [i, char_counter] in enumerate(char_counters):
            if char.lower() == char_counter["char"].lower():
                index = i

        if index == -1:
            char_counters.append({"char": char, "amount": 1})
        else:
            char_counters[index]["amount"] += 1

    for char_counter in char_counters:
        if char_counter["amount"] < 2:
            return char_counter["char"]

    return ""
