// jadi function ini buat nge set function time akan berjalan pada 1000 ms pada saat program dijalankan
window.setTimeout("time()", 1000);

function time() {
    var date = new Date();
    setTimeout("time()", 1000);
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    timeOutput = h + " : " + m + " : " + s;

    document.getElementById("timeAsli").innerHTML = timeOutput;
}
