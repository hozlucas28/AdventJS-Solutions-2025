from collections import deque


def fn(brackets: str) -> int:
    queue = deque[str]()
    deep_level = -1

    for bracket in brackets:
        if bracket == "[":
            queue.append(bracket)
        elif queue:
            deep_level = max(len(queue), deep_level)
            queue.popleft()
        else:
            return -1

    return -1 if queue else deep_level
