var butoni1 = document.getElementById('rreth');
var butoni2 = document.getElementById('drejtkendesh');
var butoni3 = document.getElementById('trekendesh')


rreth.style.display = "none";
drejtkendesh.style.display = "none";
butoni1.onclick = function(){
    rreth.style.display = "block";
}

butoni2.onclick = function(){
    drejtkendesh.style.display = "block";
}

butoni3.onclick = function(){
    trekendesh.style.display = "block";
}