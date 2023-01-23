var str1 = "Hello, my name is Irshaduddin Chowdhury.";
var str2 = "Please explore my portfolio...";

let i = 0;
let speed = 100;
function typeWriter1 () {
    if (i < str1.length){
        document.getElementById("intro-line-1").innerHTML += str1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed)
    }    
}
typeWriter1()

const goToAboutMe = () => {
    console.log("Scroll is triggered")
}



// typeWriter(str)