// HEAD
let msgs = ['"Hello World...")','"I`m Angel")','"Welcome to my page!")']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type() {
    if(count === msgs.length){
        count = 0;
    }
    currentText = msgs[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.msgContent').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400)
}())

// FOOTER
let i = 0;
let typeTxt = "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.";
let speed = 50;

function typeWriter() {
    if( i < typeTxt.length) {
        document.getElementById("msg").innerHTML += typeTxt.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}

// MAIN CONTENT
function openContent(evt, contentName)  {
    let i, tabcontent, btnLinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for( i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    btnLinks = document.getElementsByClassName("btnLinks");
    for ( i = 0; i < btnLinks.length; i++) {
        btnLinks[i].className = btnLinks[i].className.replace(" active", "");
    }
    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("active").click();