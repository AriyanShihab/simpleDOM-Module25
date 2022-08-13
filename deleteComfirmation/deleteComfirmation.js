// dom reffarence
const willHidden = document.getElementById("willHidden");
const inputFeild = document.getElementById("inputFeild");
const deleteButton = document.getElementById("deleteButton");
const message = document.getElementById("message");

inputFeild.addEventListener("keyup", function(e) {
    let textValue = e.target.value;
    if (textValue === "sorry") {
        deleteButton.removeAttribute("disabled");
        deleteButton.classList.add("show");
    } else {
        deleteButton.setAttribute("disabled", true);
        deleteButton.classList.remove("show");
    }
});

deleteButton.addEventListener("click", function() {
    willHidden.style.display = "none";
    message.innerText = "Ok! The user has been deleted";
    message.style.color = "tomato";
});