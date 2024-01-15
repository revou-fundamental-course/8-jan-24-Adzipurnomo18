document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculatorForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from submitting and refreshing the page
        hitung();
    });

    document.getElementById("resetButton").addEventListener("click", function () {
        resetForm();
    });
});

function hitung() {
    var panjang = parseFloat(document.getElementById('panjang').value);
    var lebar = parseFloat(document.getElementById('lebar').value);

    // Hitung Luas
    var luas = panjang * lebar;
    document.getElementById('luas').value = luas.toFixed(2);
    
    // Hitung Keliling
    var keliling = 2 * (panjang + lebar);
    document.getElementById('keliling').value = keliling.toFixed(2);

    // Tampilkan hasil di area result
    document.getElementById('result').innerText = 'Luas: ' + luas.toFixed(2) + ' | Keliling: ' + keliling.toFixed(2);
}

function resetForm() {
    document.getElementById('panjang').value = '';
    document.getElementById('lebar').value = '';
    document.getElementById('luas').value = '';
    document.getElementById('keliling').value = '';
    document.getElementById('result').innerText = '';
}
