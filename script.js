var main = document.querySelector("#main");
var cursor = document.querySelector(".c");

main.addEventListener("mousemove" ,function(dets){
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";
})