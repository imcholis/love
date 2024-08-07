function calculateTimeElapsed() {
    const memorialDateElement = document.getElementById("memorialDate");
    const startDate = new Date(memorialDateElement.value);
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;

    // Hitung total detik, menit, jam, dan hari
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Update elemen HTML untuk menampilkan waktu yang telah berlalu
    document.getElementById("days").innerHTML = days + "<span>Hari</span>";
    document.getElementById("hours").innerHTML = hours + "<span>Jam</span>";
    document.getElementById("minutes").innerHTML = minutes + "<span>Menit</span>";
    document.getElementById("seconds").innerHTML = seconds + "<span>Detik</span>";

    // Update elemen "since" untuk menampilkan tanggal sejak kapan
    const sinceElement = document.getElementById("since");
    sinceElement.innerHTML = formatDate(startDate);
}

function formatDate(date) {
    // Fungsi untuk memformat tanggal menjadi "DD/MM/YYYY HH:MM" untuk tampilan yang lebih baik
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Bulan dimulai dari 0
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}`;
}

// Memanggil fungsi setiap detik
setInterval(calculateTimeElapsed, 1000);

// Set the initial "since" date when the page loads
window.onload = function() {
    calculateTimeElapsed();
};