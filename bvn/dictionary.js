var dict = [
    eng = [hello, hi, goodmorning, good-afternoon, good-everning,good-night,good-bye,see-you-later],
    vnm = [xin-ào, chào, chào-buổi-chiều, chào-buổi-chiều, chúc-ngủ-ngon, ngủ-ngon, tạm-biệt, hẹn-gặp-lại],
    jpn = [こんにちは,こんにちは,おはよう,こんにちは,おやすみなさい,おやすみなさい,さようなら,後でお会いしましょう]
];
function translate() {
    var words = document.getElementById('needTr').value;

    dict.indexOf(words)

}


