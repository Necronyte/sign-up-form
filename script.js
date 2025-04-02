document.addEventListener("DOMContentLoaded", function() {

    const title = document.getElementById("title");
    const texts = document.querySelectorAll(".text");
    const substances = document.querySelectorAll(".substance");
    const email = document.getElementById("email");

    const submitButton = document.querySelector("button[type='submit']");
    const secondarySubmitButton = document.querySelector(".btn-secondary");

    const emailError = document.querySelector(".error");

    submitButton.addEventListener("click",function(e){
    e.preventDefault();
    let valid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value.trim() === "" || !emailRegex.test(email.value.trim())){
        valid = false;
        email.classList.add("error");
        emailError.style.display = "block";
    } else{
        email.classList.remove("error");
        emailError.style.display = "none";

        document.getElementById("card-container").style.display= "none";
        document.getElementById("success-container").style.display = "block";
        document.getElementById("mobile-image").style.display = "none";
    }
});

    secondarySubmitButton.addEventListener("click",function(e){
        e.preventDefault();
        let valid = true;

        document.getElementById("success-container").style.display = "none";
        document.getElementById("card-container").style.display= "block";
        document.getElementById("mobile-image").style.display = "block";

        email.value = '';
    });

});

