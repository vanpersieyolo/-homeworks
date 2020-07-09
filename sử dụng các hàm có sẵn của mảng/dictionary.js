var eng = ["hello", "hi", "goodmorning", "good afternoon", "good everning","good night","goodbye,see you later"];
var vnm = ["xin chào", "chào", "chào buổi sáng", "chào buổi chiều" , "chúc ngủ ngon", "ngủ ngon", "tạm biệt,hẹn gặp lại"];
var jpn = ["こんにちは","こんにちは","おはよう","こんにちは","おやすみなさい","おやすみなさい","さようなら, 後でお会いしましょう"];

function transL() {
    debugger;
    var words = document.getElementById('needTr').value;
    var choice1 = document.getElementById('choice1').value;
    var choice2 = document.getElementById('choice2').value;
    var tiengviet = document.getElementById('vietnam').value;
    var tienganh = document.getElementById('anh').value;
    var tiengnhat = document.getElementById('nhatban').value;
    var tiengviet1 = document.getElementById('tiengviet').value;
    var tienganh1= document.getElementById('tienganh').value;
    var tiengnhat1 = document.getElementById('tiengnhat').value;
    ;
    switch (choice1) {
        case tiengviet :
            if ( choice2 === tienganh1 ){
                resultcheck = vnm.indexOf(words);
                //alert(resultcheck);
                if (resultcheck < 0){
                    document.getElementById('disp').value = "i don't know this words !";
                }else
                {
                    // alert(eng[resultcheck]);
                    document.getElementById('disp').value = eng[resultcheck];
                }

            }else if ( choice2 === tiengnhat1){
                resultcheck = vnm.indexOf(words);
                if (resultcheck < 0){
                    document.getElementById('disp').value = "i don't know this words !";
                }else
                    document.getElementById('disp').value = jpn[resultcheck];
            }else document.getElementById('disp').value = vnm[resultcheck];
            break;

        case tiengnhat :
            if ( choice2 == tienganh1 ){
                resultcheck = jpn.indexOf(words);
                if (resultcheck < 0){
                    document.getElementById('disp').value = "i don't know this words !";
                }else
                    document.getElementById('disp').value = eng[resultcheck];
            }else if ( choice2 == tiengnhat1){
                resultcheck = jpn.indexOf(words);
                if (resultcheck < 0){
                    document.getElementById('disp').value = "i don't know this words !";
                }else
                    document.getElementById('disp').value = jpn[resultcheck];
            }else document.getElementById('disp').value = vnm[resultcheck];
            break;

        case tienganh    :
            if ( choice2 == tienganh1 ){
                resultcheck = eng.indexOf(words);
                if (resultcheck < 0){
                    document.getElementById('disp').value = "i don't know this words !";
                }else
                    document.getElementById('disp').value = eng[resultcheck];
            }else if ( choice2 == tiengnhat1){
                resultcheck = eng.indexOf(words);
                if (resultcheck < 0){
                    document.getElementById('disp').value = "i don't know this words !";
                }else
                    document.getElementById('disp').value = jpn[resultcheck];
            }else document.getElementById('disp').value = vnm[resultcheck];
            break;
    }

}