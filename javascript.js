const postButton = document.getElementById('postbutton');
const post = document.getElementById('post');
let newPost = document.getElementById('newPost');


function addPost(){
    let newName = document.getElementById("textarea");
    var txt = "";
    for(var i = 0; i < newName.length; i++){
        txt = txt + newName.element[i].value + "<br>";
    }

    document.getElementById("newPost").innerText = null;

}

postButton.addEventListener("click", addPost);



