function convert(e) {
    const elemID = e.id;
    let degrees = document.getElementById(elemID).value;
    console.log(`${degrees} input from ${elemID}`);
    elemID == 'fahrInput' ? getCelsius() : getFahr();
}

function getCelsius() {
    let f = pareFloat(d);
    c = (5/9) * (f - 32);
}

function getFahr() {
    let c = 0;
    let f = parseFloat(d);
    return c = (5/9) * (f - 32);
}