function copyValue() {
    /* Get the text field */
    var copyText = document.getElementById("output");
    
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
}

function deleteValue() {
    document.getElementById('input').value = '';
    document.getElementById('output').textContent = '';
}

var encrypt = true;

function translate(text) {
    var map = [
            ["k(h|H)", "x"],
            ["K(h|H)", "X"],
            ["c(?!(h|H))|q", "k"],
            ["C(?!(h|H))|Q", "K"],
            ["t(r|R)|c(h|H)", "c"],
            ["T(r|R)|C(h|H)", "C"],
            ["d|g(i|I)|r", "z"],
            ["D|G(i|I)|R", "Z"],
            ["g(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)", "z$1"],
            ["G(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)", "Z$1"],
            ["đ", "d"],
            ["Đ", "D"],
            ["p(h|H)", "f"],
            ["P(h|H)", "F"],
            ["n(g|G)(h|H)?", "q"],
            ["N(g|G)(h|H)?", "Q"],
            ["(g|G)(h|H)", "$1"],
            ["t(h|H)", "w"],
            ["T(h|H)", "W"],
            ["(n|N)(h|H)", "$1'"]
        ];

    if(encrypt){
        for(var i = 0; i < map.length; i++){
            text = text + "";
            text = text.replace(new RegExp(map[i][0], "g"), map[i][1]);
        }
    }
    return text;
};

function trans() {
    var inputString = document.getElementById('input').value;
    document.getElementById('output').textContent = translate(inputString);
}
