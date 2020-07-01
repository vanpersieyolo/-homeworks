var year = (prompt());

if (year % 4 == 0){
    if (year % 100 == 0){
        if (year % 400 == 0){
            alert(' day la nam nhuan');
        }else alert('day khong phai la nam nhuan');
    }else alert('day la nam nhuan');
}else alert('day khong phai nam nhuan');
