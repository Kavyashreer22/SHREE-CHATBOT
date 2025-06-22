var audio = new Audio('assets/sentmessage.mp3');

function startFunction() {
    setLastSeen();
    playGreeting();
    waitAndResponce("intro");
}

function playGreeting() {
    const greeting = document.getElementById("greetingAudio");
    greeting.play();
}

function toggleChatbox() {
    const box = document.getElementById("chatContainer");
    box.style.display = (box.style.display === "flex") ? "none" : "flex";
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("chatContainer").classList.toggle("dark-mode");
}

function openFullScreenDP() {
    document.getElementById("fullScreenDP").style.display = "flex";
}

function closeFullDP() {
    document.getElementById("fullScreenDP").style.display = "none";
}

function previewImage(src) {
    const full = document.getElementById("imageFullscreen");
    const fullImg = document.getElementById("fullscreenImg");
    fullImg.src = src;
    full.style.display = "flex";
}

function closeImagePreview() {
    document.getElementById("imageFullscreen").style.display = "none";
}

function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") return;

    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");

    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    dateLabel.className = "dateLabel";
    myDiv.className = "sent";
    greendiv.className = "green";
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    document.getElementById("chatting").scrollTop = document.getElementById("chatting").scrollHeight;

    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function typeWriterEffect(text, element, speed = 30) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");

    dateLabel.className = "dateLabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.className = "received";
    greendiv.className = "grey";
    greendiv.innerHTML = "";

    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    document.getElementById("chatting").scrollTop = document.getElementById("chatting").scrollHeight;
    playSound();
    typeWriterEffect(textToSend, greendiv);
}

function playSound() {
    audio.play();
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

