


document.getElementById("subjectbtn1").onclick = myFunction;





function myFunction(){
        let title = document.getElementById("subject1").value;
        let textstring = document.getElementById("text").value;

        document.getElementById("newTopic").innerText = title;
        document.getElementById("textstring").innerText = textstring;
}
