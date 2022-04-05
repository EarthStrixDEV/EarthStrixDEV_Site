const body = document.querySelector('section');

const bg_black = () =>
{
    body.classList.add("background-color1");
}

const siteTime = () =>
{
    let time = new Date();
    let getTime = time.toLocaleTimeString();
    let getDate = time.toLocaleDateString(); 
    console.log(`siteTime :${getTime}`);
    console.log(`siteDate :${getDate}`);
}
