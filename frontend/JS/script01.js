let paragraph_text = document.querySelector("p")
let move_btn = document.querySelector(".move_btn");
let social_icon = document.querySelectorAll(".social-icon")
let link_social = ["https://facebook.com/EarthX99/","https://instagram.com/earthstrix_/","https://github.com/EarthStrixDEV/"];

paragraph_text.innerHTML = paragraph_text.innerHTML.toUpperCase();

move_btn.addEventListener("click", (e) => {
  window.open("/home")
})
