const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const userh3 = document.querySelector(".h3-user");
const passwordh3 = document.querySelector(".h3-password");
const fasfauser = document.querySelector(".fa-user")
const fasfalock = document.querySelector(".fa-lock")
const container = document.querySelector(".container");
const closeuser = document.querySelector(".close-user");
const closepassword = document.querySelector(".close-password");

container.addEventListener("click", (e)=>{
    
    if (e.target.className == "input1"){
        userh3.classList.add("active");
        fasfauser.style.color = "green";
        closeuser.style.color = "rgba(0, 0, 0, 0.7)";
    }else if(e.target.className != "input1" && input1.value!=""){
        userh3.classList.add("active");
        fasfauser.style.color = "green";
        closeuser.style.color = "rgba(0, 0, 0, 0.7)";
    }else{
        userh3.classList.remove("active");
        fasfauser.style.color = "";
        closeuser.style.color = "";
    }
});

container.addEventListener("click", (e)=>{
    if (e.target.className == "input2"){
        passwordh3.classList.add("active");
        fasfalock.style.color = "green";
        closepassword.style.color = "rgba(0, 0, 0, 0.7)";
    }else if(e.target.className != "input2" && input2.value!=""){
        passwordh3.classList.add("active");
        fasfalock.style.color = "green";
        closepassword.style.color = "rgba(0, 0, 0, 0.7)";
    }else{
        passwordh3.classList.remove("active");
        fasfalock.style.color = "";
        closepassword.style.color = "";
    }
});

closeuser.addEventListener("click",()=>{
    input1.value="";
});
closepassword.addEventListener("click",()=>{
    input2.value="";
});
