const message = `Happy Birthday, My girl , Meri jaana, Meri begum
You are the reason for my happiness.
My love, if you had never been born, I don’t know what my life would have been like. Leaving all these words aside, I want you to know that I love you very, very much. You mean the world to me.`;

// Heart -> Card after 4 sec
setTimeout(() => {
  document.getElementById("heart").style.display = "none";
  document.getElementById("card").classList.add("show");
  typeText();
}, 4000);

let i = 0;

function typeText() {
  if (i < message.length) {
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeText, 40); // typing speed
  } else {
    setTimeout(playVideo, 2000);
  }
}

function playVideo() {
  document.getElementById("card").style.display = "none";
  const vid = document.getElementById("video");
  vid.style.display = "block";

  // autoplay fix for mobile
  vid.muted = false;
  vid.play().catch(() => {
    vid.controls = true; // agar autoplay block ho jaye
  });
}
