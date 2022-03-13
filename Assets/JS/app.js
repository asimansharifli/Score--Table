document.getElementById('number').onclick = function changeContent() {
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
document.getElementById('numbers').onclick = function changeContents() {
    let value = parseInt(document.getElementById('numbers').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numbers').value = value;
}
document.getElementById('numbert').onclick = function changeContentt() {
    let value = parseInt(document.getElementById('numbert').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numbert').value = value;
}
document.getElementById('numberfr').onclick = function changeContentfr() {
    let value = parseInt(document.getElementById('numberfr').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberfr').value = value;
}
document.getElementById('numberfs').onclick = function changeContentfs() {
    let value = parseInt(document.getElementById('numberfs').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberfs').value = value;
}
document.getElementById('numberss').onclick = function changeContentss() {
    let value = parseInt(document.getElementById('numberss').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('numberss').value = value;
}
document.getElementById('minus').onclick = function changeContentm() {
    let value = document.getElementById('number').value
    value = isNaN(value) && value>0 ? 1 : value;
    value--;
    document.getElementById('number').value = value;
}
document.getElementById('minuss').onclick = function changeContentm() {
    let value = document.getElementById('numbers').value
    value = isNaN(value) && value>0 ? 1 : value;
    value--;
    document.getElementById('numbers').value = value;
}
document.getElementById('minust').onclick = function changeContentm() {
    let value = document.getElementById('numbert').value
    value = isNaN(value) && value>0 ? 1 : value;
    value--;
    document.getElementById('numbert').value = value;
}
document.getElementById('minusfr').onclick = function changeContentm() {
    let value = document.getElementById('numberfr').value
    value = isNaN(value) && value>0 ? 1 : value;
    value--;
    document.getElementById('numberfr').value = value;
}
document.getElementById('minusfs').onclick = function changeContentm() {
    let value = document.getElementById('numberfs').value
    value = isNaN(value) && value>0 ? 1 : value;
    value--;
    document.getElementById('numberfs').value = value;
}
document.getElementById('minusss').onclick = function changeContentm() {
    let value = document.getElementById('numberss').value
    value = isNaN(value) && value>0 ? 1 : value;
    value--;
    document.getElementById('numberss').value = value;
}