function calculate() {
    var sideLength = parseFloat(document.getElementById('side').value);

    if (isNaN(sideLength)) {
        document.getElementById('result').innerHTML = 'Masukkan panjang sisi yang valid.';
    } else {
        var area = sideLength * sideLength;
        var perimeter = 4 * sideLength;
        document.getElementById('result').innerHTML = 'Luas: ' + area.toFixed(2) + '<br>Keliling: ' + perimeter.toFixed(2);
    }
}

function resetForm() {
    document.getElementById('side').value = '';
    document.getElementById('result').innerHTML = '';
}
