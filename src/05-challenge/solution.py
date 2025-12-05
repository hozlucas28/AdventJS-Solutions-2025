from math import floor
from datetime import date


def fn(from_time: str, take_off_time: str) -> int:
    _from_time = (
        from_time.replace("*", "-")
        .replace("@", " ")
        .replace("|", ":")
        .replace(" NP", "")
    )

    _take_off_time = (
        take_off_time.replace("*", "-")
        .replace("@", " ")
        .replace("|", ":")
        .replace(" NP", "")
    )

    from_date = date.fromisoformat(_from_time)
    take_off_date = date.fromisoformat(_take_off_time)

    diff_seconds: float = (take_off_date - from_date).total_seconds()

    return floor(diff_seconds)
