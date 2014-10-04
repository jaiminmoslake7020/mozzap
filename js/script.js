function toDegrees (angle) {
    return angle * (180 / Math.PI);
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

function getCos(value) {
    return Math.cos(toRadians(value));
}

function getSin(value) {
    return Math.sin(toRadians(value));
}