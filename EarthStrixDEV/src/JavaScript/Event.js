var btn = document.querySelectorAll('button');
var name_category = document.getElementById('name-category');
var name_user = document.getElementById("name-user");
var body_con = document.getElementById('body');

console.log(name_category);
console.log(name_user);
console.log(body_con);

btn[4].addEventListener('click', () => {
    let getdata_prompt = prompt("Enter your name");
    if (getdata_prompt != "")
    {
        name_user.innerText = `Welcome back, ${ getdata_prompt.toUpperCase() }`;
    } else
    {
        let getdata_prompt = prompt("Enter your name", "Enter your name before submit!!!");
    }
})

btn[1].addEventListener('click', () => {
    let name_text = "Web Development";
    name_category.innerText = `Course : ${ name_text }`;
})

btn[2].addEventListener('click', () => {
    let name_text = "Programming Language";
    name_category.innerText = `Course : ${name_text}`;
})

btn[3].addEventListener('click', () => {
    let name_text = "Mobile Development";
    name_category.innerText = `Course : ${name_text}`;
})
