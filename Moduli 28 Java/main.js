var butoni = document.getElementById("btn1");
var butoni1 = document.getElementById("btn2");
var butoni2 = document.getElementById("btn3");
var teksti = document.getElementById("teksti");
var butoni3 = document.getElementById("btn4");

 butoni.onclick = function(){
    alert('Blerja juaj ishte e suksesshme');
}

butoni1.onmouseover = function(){
    alert('Ti sapo vendose mausin mbi mua');
}

butoni2.onmouseleave = function(){
    alert('Ti sapo hiqe mausin nga une');
}

butoni3.onclick = function(){
    teksti.style.color = "red";
    teksti.style.backgroundColor = "grey";
    teksti.style.fontSize = "40px";
}