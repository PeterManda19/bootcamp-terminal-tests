module.exports = function isWeekday(dayName) {
    const trimmedDayName = dayName.trim();
    return trimmedDayName.endsWith("day") && (!trimmedDayName.startsWith("S")) && (!trimmedDayName.startsWith("m"));
};
  