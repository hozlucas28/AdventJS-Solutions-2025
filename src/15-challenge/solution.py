def fn(data: list[dict[str, int | str]], sortBy: str) -> str:
    _data = sorted(
        data,
        key=lambda element: element[sortBy],
    )

    table: list[list[int | str]] = []
    header_lengths = list((0 for _ in enumerate(data[0])))

    for element in data:
        header_index = 0
        row: list[int | str] = []

        for key in element:
            value = element[key]
            header_lengths[header_index] = max(
                len(f"{value}"), header_lengths[header_index]
            )

            row.append(value)
            header_index = len(row)

        table.append(row)

    sep = "+"
    for col_length in header_lengths:
        sep += "+".rjust(col_length + 3, "-")

    header = "|"
    for i in range(len(table[0])):
        header += f" {chr(i + 65)}".ljust(header_lengths[i] + 1, " ") + " |"

    content = ""
    for row_data in table:
        for i, col_data in enumerate(row_data):
            content += f"| {col_data}".ljust(header_lengths[i] + 3, " ")

        content += "|\n"

    text_table = f"{sep}\n{header}\n{sep}\n{content}{sep}"

    return text_table
