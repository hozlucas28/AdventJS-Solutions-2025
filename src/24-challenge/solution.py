from typing import TypedDict, Optional


BTreeNode = TypedDict(
    "BTreeNode",
    {"value": str, "left": Optional["BTreeNode"], "right": Optional["BTreeNode"]},
)


def fn(
    tree_01: Optional[BTreeNode] = None, tree_02: Optional[BTreeNode] = None
) -> list[bool | str]:
    if not tree_01 and not tree_02:
        return [True, ""]

    if not tree_01 or not tree_02:
        return [False, tree_01["value"] if (tree_01) else ""]

    if tree_01["value"] != tree_02["value"]:
        return [False, tree_01["value"]]

    is_left_synchronized = fn(tree_01["left"], tree_02["right"])[0]
    is_right_synchronized = fn(tree_01["right"], tree_02["left"])[0]

    return [is_left_synchronized and is_right_synchronized, tree_01["value"]]
