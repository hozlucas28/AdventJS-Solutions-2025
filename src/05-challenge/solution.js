/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
export default function fn(fromTime, takeOffTime) {
	const elfDateTimeRegex =
		/(?<year>\d{4})\*(?<month>\d{2})\*(?<day>\d{2})@(?<hour>\d{2})\|(?<minute>\d{2})\|(?<second>\d{2})/

	const _fromTime = fromTime.match(elfDateTimeRegex)
	const _takeOffTime = takeOffTime.match(elfDateTimeRegex)
	if (!_fromTime || !_takeOffTime) throw new Error('Invalid elf date time format')

	const toTimestamp = (date) =>
		Date.UTC(
			parseInt(date.groups.year),
			parseInt(date.groups.month) - 1,
			parseInt(date.groups.day),
			parseInt(date.groups.hour),
			parseInt(date.groups.minute),
			parseInt(date.groups.second)
		)

	const fromTimestamp = toTimestamp(_fromTime)
	const takeOffTimestamp = toTimestamp(_takeOffTime)

	const diffSeconds = (takeOffTimestamp - fromTimestamp) / 1000

	return Math.floor(diffSeconds)
}
