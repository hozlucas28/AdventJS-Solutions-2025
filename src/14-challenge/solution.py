from typing import Any, cast


def fn(workshop: dict[str, Any], gift: str | int | bool) -> list[str]:
    for key in workshop:
        value = workshop[key]

        if not isinstance(value, dict):
            if value == gift:
                return [key]
        else:
            inner_key_path = [key, *fn(cast(dict[str, Any], value), gift)]
            if len(inner_key_path) != 1:
                return inner_key_path

    return []
