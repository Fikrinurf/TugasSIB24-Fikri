let nama = prompt('Masukan nama kamu : ');
alert(`hallo nama saya ${nama}`);

let nilai = prompt('masukan nilai kamu');

// percabangan
if (nilai >= 90 && nilai <= 100) {
    alert(`${nama}, nilai dari ${nilai} adalah A `);
    document.writeln(`${nama}, nilai dari ${nilai} adalah A <br> `);
} else if (nilai >= 80 && nilai <= 89) {
    alert(`${nama}, nilai dari ${nilai} adalah B `);
    document.writeln(`${nama}, nilai dari ${nilai} adalah B <br>`);
} else if (nilai >= 70 && nilai <= 79) {
    alert(`${nama}, nilai dari ${nilai} adalah C `);
    document.writeln(`${nama}, nilai dari ${nilai} adalah C <br>`);
} else if (nilai >= 60 && nilai <= 69) {
    alert(`${nama}, nilai dari ${nilai} adalah D `);
    document.writeln(`${nama}, nilai dari ${nilai} adalah D <br>`);
} else if (nilai >= 50 && nilai <= 59) {
    alert(`${nama}, nilai dari ${nilai} adalah E `);
    document.writeln(`${nama}, nilai dari ${nilai} adalah E <br>`);
} else {
    alert('kamu gak lulus <br>')
}


var userInput = prompt("Masukkan angka hari (0-6):");
var dayOfWeek = parseInt(userInput);
var dayName;

switch (dayOfWeek) {
    case 0:
        dayName = "Minggu";
        break;
    case 1:
        dayName = "Senin";
        break;
    case 2:
        dayName = "Selasa";
        break;
    case 3:
        dayName = "Rabu";
        break;
    case 4:
        dayName = "Kamis";
        break;
    case 5:
        dayName = "Jumat";
        break;
    case 6:
        dayName = "Sabtu";
        break;
    default:
        dayName = "Hari tidak valid";
}

alert("Hari ini adalah " + dayName);

for (let i = 1; i <= 5; i++) {
    console.log("hallo")
}

