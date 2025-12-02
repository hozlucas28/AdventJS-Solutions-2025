from typing import TypedDict

GiftToProduce = TypedDict(
    "GiftToProduce",
    {
        "toy": str,
        "quantity": int,
    },
)


def fn(gifts_to_produce: list[GiftToProduce]) -> list[str]:
    gifts: list[str] = []

    for gift in gifts_to_produce:
        if gift["quantity"] > 0:
            gifts.append(*[gift["toy"]] * gift["quantity"])

    return gifts
