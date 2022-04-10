var Element = {
    h2: document.querySelectorAll("h2"),
    body: document.getElementsByTagName("body"),
    p: document.querySelectorAll("p"),
    strong: document.querySelectorAll("strong"),
    label: document.querySelectorAll("label"),
    alert_btn: document.getElementById("alert-btn"),
    about_btn: document.getElementById("alert-btn"),
    text_box_about: document.getElementsByClassName('text-about'),
    p_about: document
};

function DarkTheme() {
    let getBody = Element.body[0];
    getBody.style.backgroundColor = 'black';

    for (let i = 0; i < Element.h2.length; i++)
    {
        let element = Element.h2[i];
        element.style.color = 'white';
    }
    for (let i = 0; i < Element.p.length; i++)
    {
        let element = Element.p[i];
        element.style.color = 'white';
    }
    for (let i = 0; i < Element.strong.length; i++)
    {
        let element = Element.strong[i];
        element.style.color = 'white';
    }
    for (let i = 0; i < Element.label.length; i++)
    {
        let element = Element.label[i];
        element.style.color = 'white';
    }
}

