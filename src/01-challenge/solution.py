def fn(gifts: list[str]) -> list[str]:
    un_defective_gifts = filter(lambda gift: not "#" in gift, gifts)
    return un_defective_gifts
