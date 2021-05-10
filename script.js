let namaanda = 'NAMA ANDA'; // gantikan nama anda di sini

document.getElementById('pendapat').hidden = true;

function teruskan() {
    let nama = document.getElementById('nama').value;
    if (nama !== '') {
        document.getElementById('namauser').hidden = true;

        let ucapan = 'Okay ' + nama.toUpperCase();
        ucapan += ', apakah pendapat anda tentang ';
        ucapan += namaanda.toUpperCase() + '?';
        document.getElementById('ucapan').innerText = ucapan;
        document.getElementById('pendapat').hidden = false;
    } else {
        alert('Sila isi nama anda');
    }
}

function suka() {
    alert('Kenapa berpura-pura?');
    location.reload();
}

function taksuka() {
    let taksuka = document.getElementById('taksuka');
    let lebag = window.innerWidth - 150;
    let tinggi = window.innerHeight - 60;
    let kiri = Math.floor(Math.random() * lebag);
    let atas = Math.floor(Math.random() * tinggi);
    let hantu = document.getElementById('hantu')
    hantu.style.left = kiri.toString() + 'px';
    hantu.style.top = atas.toString() + 'px';
    hantu.style.display = 'inline';
    taksuka.hidden = true;
}
