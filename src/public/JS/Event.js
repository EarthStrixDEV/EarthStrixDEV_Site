var btn = document.querySelectorAll('button');
var name_category = document.getElementById('name-category');
var name_user = document.getElementById("name-user");
var body_co = document.getElementById('body');
var paragraph = document.querySelectorAll('p');
var name_course = document.getElementsByClassName('name-header-course');
var li_co = document.querySelectorAll('li');
var header_video_co = document.querySelectorAll(".header-name-video");


btn[5].addEventListener('click', () => {
    body_co.style.backgroundColor = "black";
    name_category.style.color = "white";
    name_user.style.color = "white";
    
    for (let index = 0; index < paragraph.length; index++) {
        let element = paragraph[index];
        element.style.color = "white";
    }
    for (let index = 0; index < name_course.length; index++) {
        let element = name_course[index];
        element.style.color = "white";
    }
    for (let index = 0; index < li_co.length; index++) {
        let element = li_co[index];
        element.style.color = "white";
        element.style.borderColor = "white";
    }
    for (let index = 0; index < header_video_co.length; index++) {
        let element = header_video_co[index];
        element.style.borderColor = "white";
    }
})

btn[6].addEventListener('click', () => {
    alert('Former EarthStrixDEV');
})

btn[4].addEventListener('click', () => {
    let getdata_prompt = prompt("Enter your name");
    if (getdata_prompt != "") {
        name_user.innerText = `Welcome back, ${ getdata_prompt.toUpperCase() }`;
    } else {
        let getdata_prompt = prompt("Enter your name", "Enter your name before submit!!!");
    }
})

btn[2].addEventListener('click', () => {
    
})