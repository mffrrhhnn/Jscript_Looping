var jmlangkot = 10;
var angkot = 6;

for (var noAng = 1; noAng <= jmlangkot; noAng++) {
    if (noAng <= 6) {
        console.log('Angkot No.' + noAng + ' beroperasi dengan baik');
    } else if (noAng === 8) {
        console.log('Angkot No.' + noAng + ' sedang lembur');
    } else {
        console.log('Angkot No.' + noAng + ' tidak beroperasi dengan baik');
    }
}

