type ElfDateTime = `${number}*${number}*${number}@${number}|${number}|${number} NP`

export default function fn(fromTime: ElfDateTime, takeOffTime: ElfDateTime): number {
	const elfDateTimeRegex: RegExp =
		/(?<year>\d{4})\*(?<month>\d{2})\*(?<day>\d{2})@(?<hour>\d{2})\|(?<minute>\d{2})\|(?<second>\d{2})/

	const _fromTime = fromTime.match(elfDateTimeRegex)
	const _takeOffTime = takeOffTime.match(elfDateTimeRegex)
	if (!_fromTime || !_takeOffTime) throw new Error('Invalid elf date time format')

	const toTimestamp = (date: RegExpMatchArray) =>
		Date.UTC(
			parseInt(date.groups!.year),
			parseInt(date.groups!.month) - 1,
			parseInt(date.groups!.day),
			parseInt(date.groups!.hour),
			parseInt(date.groups!.minute),
			parseInt(date.groups!.second)
		)

	const fromTimestamp = toTimestamp(_fromTime)
	const takeOffTimestamp = toTimestamp(_takeOffTime)

	const diffSeconds = (takeOffTimestamp - fromTimestamp) / 1000

	return Math.floor(diffSeconds)
}
