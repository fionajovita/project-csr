function getStudentName(){
    var name = getCookie("name");
    if (name != "") {
        document.getElementById('student-name').textContent = "Hello, " + name;
        modal.style.display = "none";
        
    }
    else{
        document.getElementById('student-name').textContent = "Hello, Friend";
        modal.style.display = "block";
    }
}     