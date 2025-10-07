function getMonths() {
    return {
        1: "styczeń",
        2: "luty",
        3: "marzec",
        4: "kwiecień",
        5: "maj",
        6: "czerwiec",
        7: "lipiec",
        8: "sierpień",
        9: "wrzesień",
        10: "październik",
        11: "listopad",
        12: "grudzień",
    };
}

export function addZero(value) {
    return String(value).padStart(2, 0);
}

export function convertMonth(value) {
    const months = getMonths();

    return months[value];
}

const PI = Math.PI;

export default PI;
