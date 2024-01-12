function calculateArea() {
    var sideLengthArea = parseFloat(document.getElementById('sideArea').value);

    if (isNaN(sideLengthArea) || sideLengthArea <= 0) {
        document.getElementById('resultArea').innerHTML = 'Masukkan panjang sisi yang valid.';
    } else {
        var area = calculateAreaValue(sideLengthArea);
        document.getElementById('resultArea').innerHTML = 'Luas: ' + area.toFixed(2);
    }
}

function calculatePerimeter() {
    var sideLengthPerimeter = parseFloat(document.getElementById('sidePerimeter').value);

    if (isNaN(sideLengthPerimeter) || sideLengthPerimeter <= 0) {
        document.getElementById('resultPerimeter').innerHTML = 'Masukkan panjang sisi yang valid.';
    } else {
        var perimeter = calculatePerimeterValue(sideLengthPerimeter);
        document.getElementById('resultPerimeter').innerHTML = 'Keliling: ' + perimeter.toFixed(2);
    }
}

function calculateCombined() {
    var sideLengthCombined = parseFloat(document.getElementById('sideCombined').value);

    if (isNaN(sideLengthCombined) || sideLengthCombined <= 0) {
        document.getElementById('resultCombined').innerHTML = 'Masukkan panjang sisi yang valid.';
    } else {
        var areaCombined = calculateAreaValue(sideLengthCombined);
        var perimeterCombined = calculatePerimeterValue(sideLengthCombined);
        document.getElementById('resultCombined').innerHTML = 'Luas: ' + areaCombined.toFixed(2) + '<br>Keliling: ' + perimeterCombined.toFixed(2);
    }
}

function calculateAreaValue(sideLength) {
    return sideLength * sideLength;
}

function calculatePerimeterValue(sideLength) {
    return 4 * sideLength;
}

function resetAll() {
    document.getElementById('sideArea').value = '';
    document.getElementById('resultArea').innerHTML = '';
    document.getElementById('sidePerimeter').value = '';
    document.getElementById('resultPerimeter').innerHTML = '';
    document.getElementById('sideCombined').value = '';
    document.getElementById('resultCombined').innerHTML = '';
}

function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    document.getElementById('current-time').innerHTML = 'Waktu: ' + hours + ':' + minutes + ':' + seconds;
}

function calculateAll() {
    calculateArea();
    calculatePerimeter();
    calculateCombined();
}

// Memanggil updateTime setiap detik
setInterval(updateTime, 1000);

// Memanggil updateTime pada saat halaman dimuat
updateTime();
