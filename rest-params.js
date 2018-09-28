'Bad Function Code 💩'

function totalHitPoints(a, b, c, d) {
    return a + b + c + d;
}

'Good Function Code ✅'

function totalHitPoints(...hits) {
    return hits.reduce((a, b) => a + b);
}

totalHitPoints(1,2,3,4,5,6,7,)