const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/rainfeeder.png")
    {
        myImage.setAttribute("src", "images/Reaper.png");
    }
    else
    {
        myImage.setAttribute("src", "images/rainfeeder.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name: ");
    if(!myName)
    {
        setUserName()
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Good morning, ${myName}`; 
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Good morning, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}