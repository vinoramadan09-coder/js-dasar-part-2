function cekNilai() {
    const input = document.getElementById("nilai").value;
    const hasil = document.getElementById("hasil");

    if (input === "" || Number(input) < 0 ||
        Number(input) > 100) {
        hasil.innerHTML =
            "Masukkan nilai antara 0 sampai 100!";
        return;
    }

    const nilai = Number(input);
    let grade;

    if (nilai >= 90) {
        grade = "A";
    } else if (nilai >= 80) {
        grade = "B";
    } else if (nilai >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    let keterangan;

    switch (grade) {
        case "A":
            keterangan = "Sangat Baik";
            break;
        case "B":
            keterangan = "Baik";
            break;
        case "C":
            keterangan = "Cukup";
            break;
        case "D":
            keterangan = "Perlu belajar lagi";
            break;
    }
    hasil.innerHTML =
        "Nilai kamu: " + grade + " - " + keterangan;
}

function cekTahun() {
    const input = document.getElementById("tahun").value;
    const hasil = document.getElementById("hasilTahun");

    if (input === "" || Number(input) <= 0 ||
        !Number.isInteger(Number(input))) {
        hasil.innerHTML = "Masukkan tahun yang valid!";
        return;
    }

    const tahun = Number(input);

    if ((tahun % 4 === 0 && tahun % 100 !== 0) ||
        tahun % 400 === 0) {
        hasil.innerHTML =
            tahun + " adalah tahun kabisat.";
    } else {
        hasil.innerHTML =
            tahun + " bukan tahun kabisat.";
    }
}