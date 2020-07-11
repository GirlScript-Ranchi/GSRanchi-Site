function scroll(pos) {
    var txt = "&lt;Dev_Launch/>"
    var output = "";
    var screen = document.getElementById("dev");
    for (var i = 0; i < pos; i++) {
        output += txt.charAt(i);
    }
    output += txt.charAt(pos);
    if(pos > 1){
        screen.innerHTML = output;
    }
    pos++;
    if (pos != txt.length) {
        window.setTimeout(function () {
            scroll(pos);
        }, 100);
    } else {
        window.setTimeout(function () {
            scroll(0);
        }, 500);
    }
}
scroll(0);