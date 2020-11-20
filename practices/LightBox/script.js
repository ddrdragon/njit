var index = 0;
var pics = document.getElementsByClassName("pics");
var demo = document.getElementsByClassName("demo");

function showSlide(n) {
    if(n != index) {
        closeSlide(index);
    }
    index = n;
    pics[index].style.display = "block";
    demo[index].className += " active";
    document.getElementById("ddd").innerHTML = demo[index].alt;
}

function closeSlide(n) {
    index = n;
    pics[index].style.display = "none";
    demo[index].className = "demo";
}

function changeSlide(n) {
    closeSlide(index);
    index += n;
    if(index < 0) {
        index = pics.length - 1;
    }
    index %= pics.length;
    showSlide(index);
}

function openModal(n) {
    document.getElementById("myModal").style.display = "block";
    index = n;
    showSlide(index);
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    closeSlide(index);
}