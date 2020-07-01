function start(giatri) {
    var sothunhat = document.getElementById('sothu1').value;
    var sothuhai = document.getElementById('sothu2').value;
    sothuhai = parseInt(sothuhai);
    sothunhat = parseInt(sothunhat);
    if (giatri === '+'){
        dapan= sothunhat + sothuhai;
    }else
        if (giatri === '-') {
        dapan= sothunhat - sothuhai;
    }else
        if (giatri === '*') {
        dapan = sothunhat * sothuhai;
    }else
        dapan= sothunhat/sothuhai;

    alert("ket qua la: " +dapan);
}

