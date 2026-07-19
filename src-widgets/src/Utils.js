export function getFromToTime(timeStart, timeInterval) {
    const from = new Date(timeStart || Date.now());
    const to = new Date(timeStart || Date.now());
    if (timeInterval === 'day') {
        from.setHours(0, 0, 0, 0);
        to.setHours(23, 59, 59, 999);
    } else if (timeInterval === 'week') {
        // getDay() returns 0 for Sunday; treat it as 7 so the week always starts on
        // Monday and the current Sunday stays inside its own week (#270, #290).
        // Otherwise on Sundays the whole week window was shifted forward by 7 days.
        const dayOfWeek = from.getDay() || 7;
        from.setDate(from.getDate() - dayOfWeek + 1);
        from.setHours(0, 0, 0, 0);
        to.setDate(to.getDate() - dayOfWeek + 7);
        to.setHours(23, 59, 59, 999);
    } else if (timeInterval === 'month') {
        from.setDate(1);
        from.setHours(0, 0, 0, 0);
        to.setMonth(to.getMonth() + 1);
        to.setDate(0);
        to.setHours(23, 59, 59, 999);
    } else if (timeInterval === 'year') {
        from.setMonth(0);
        from.setDate(1);
        from.setHours(0, 0, 0, 0);
        to.setMonth(12);
        to.setDate(0);
        to.setHours(23, 59, 59, 999);
    }

    return { from, to };
}

export default getFromToTime;
