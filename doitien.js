function convet(){
    var sotien = document.getElementById("sotiencandoi").value;
    console.log(sotien);
    let a;
    sotien= parseInt(sotien);
    a = sotien / 23000;
    document.getElementById('doitien').innerHTML = 'so tien can doi la:  ' +a;
}