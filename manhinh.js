function manhinh(comparenumb) {
    var manhinh = document.getElementById('printt').value;
    var bieuthuc = document.getElementById('printt').value;
    switch (comparenumb) {
        case "+":
            document.getElementById("printt").value = manhinh += "+";
            break;
        case "-":
            document.getElementById("printt").value = manhinh += "-";
            break;
        case "*":
            document.getElementById("printt").value = manhinh += "*";
            break;
        case "/":
            document.getElementById("printt").value = manhinh += "/";
            break;
        case "9":
            document.getElementById("printt").value = manhinh += "9";
            break;
        case "8":
            document.getElementById("printt").value = manhinh += "8";
            break;
        case "7":
            document.getElementById("printt").value = manhinh += "7";
            break;
        case "6":
            document.getElementById("printt").value = manhinh += "6";
            break;
        case "5":
            document.getElementById("printt").value = manhinh += "5";
            break;
        case "4":
            document.getElementById("printt").value = manhinh += "4";
            break;
        case "3":
            document.getElementById("printt").value = manhinh += "3";
            break;
        case "2":
            document.getElementById("printt").value = manhinh += "2";
            break;
        case "1":
            document.getElementById("printt").value = manhinh += "1";
            break;
        case "0":
            document.getElementById("printt").value = manhinh += "0";
            break;
        case "=":
            var ketqua = eval(bieuthuc);
            document.getElementById('printt').value = ketqua;


    }


}


