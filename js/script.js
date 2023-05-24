// Mendapatkan elemen-elemen yang diperlukan
var calculatorContainer = document.getElementById("calculator-container");

var luasForm = document.getElementById("luasForm");
var rumusLuas = document.getElementById("rumus-luas");
var perhitunganLuas = document.getElementById("perhitungan-luas");
var outputLuas = document.getElementById("output_luas");

var kelilingForm = document.getElementById("kelilingForm");
var rumusKeliling = document.getElementById("rumus-keliling");
var perhitunganKeliling = document.getElementById("perhitungan-keliling");
var outputKeliling = document.getElementById("output_keliling");

// Fungsi untuk menampilkan kalkulator sesuai bentuk yang dipilih
function showCalculator(shape) {
    if (shape === "luas-persegi") {
        // Tampilkan kalkulator untuk luas persegi
        calculatorContainer.style.display = "block";
        document.querySelector(".luas").style.display = "block";
        document.querySelector(".keliling").style.display = "none";
    } else if (shape === "keliling-persegi") {
        // Tampilkan kalkulator untuk keliling persegi
        calculatorContainer.style.display = "block";
        document.querySelector(".luas").style.display = "none";
        document.querySelector(".keliling").style.display = "block";
    }

    // Tambahkan class "clicked" pada elemen yang dipilih
    calculatorContainer.querySelector(".luas").classList.add("clicked");
    calculatorContainer.querySelector(".keliling").classList.add("clicked");
}

// Event listener untuk mengklik container
calculatorContainer.addEventListener("click", function () {
    showCalculator('luas-persegi,keliling-persegi');
});

// Event listener saat formulir luas di-submit
luasForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman saat submit

    var sisi = parseInt(luasForm.elements["sisi-luas"].value);

    // Menampilkan rumus luas
    rumusLuas.textContent = "L = S x S";

    // Menampilkan perhitungan luas
    perhitunganLuas.textContent = "L = " + sisi + " x " + sisi;

    // Menampilkan output luas
    outputLuas.textContent = "L = " + (sisi * sisi);
});

// Event listener saat formulir keliling di-submit
kelilingForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman saat submit

    var sisi = parseInt(kelilingForm.elements["sisi-keliling"].value);

    // Menampilkan rumus keliling
    rumusKeliling.textContent = "K = 4 x S";

    // Menampilkan perhitungan keliling
    perhitunganKeliling.textContent = "K = 4 x " + sisi;

    // Menampilkan output keliling
    outputKeliling.textContent = "K = " + (4 * sisi);
});
