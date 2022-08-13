// steps for adding commnet into dom
// step 01: get dom refarences;

const commentHolder = document.getElementById("commentHolder");
const commnetInput = document.getElementById("commnetInput");
const addComment = document.getElementById("addComment");
// add event lishenter on commnet buttton

addComment.addEventListener("click", function(e) {
    // step 02: read user comment on the texteria field;
    const comment = commnetInput.value;
    // step 03: creating an element to render the comment on the dom

    const p = document.createElement("p");
    p.innerText = comment;
    commentHolder.appendChild(p);

    // step 04: clear input value after append comment
    commnetInput.value = "";
});