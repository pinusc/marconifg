window.onload = function() {
    var student = document.getElementById("student-filter-checkbox");
    var teacher = document.getElementById("teacher-filter-checkbox");
    var school= document.getElementById("school-filter-checkbox");
    student.onclick = function() {
        toggle("student");
    };
    teacher.onclick = function() {
        toggle("teacher");
    };
    school.onclick = function() {
        toggle("school");
    };

    student.checked = true;
    teacher.checked = true;
    school.checked = true;
};

function toggle(type){
    var check = document.getElementById(type + "-filter-checkbox");
    var list = document.querySelectorAll(".news." + type);
    console.log(1);
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = check.checked ? "flex" : "none";
    }
}

