
var subjectInput = document.querySelector(".add-subject");
var studentInput = document.querySelector(".add-student-name");
var gradeInput = document.querySelector(".add-grade");

var status = {
    OK : "OK", 
    MISSING_DATA: "Please insert all data correct", 
};

function collectData(){
    var collectData= {};
    collectData.subject=subjectInput.value;
    collectData.student=studentInput.value;
    collectData.grade=gradeInput.value;
}

function validateData(){
    if(subjectInput.value == "" || studentInput.value == "" || gradeInput.value == ""){
        return status.MISSING_DATA;
    }
    return status.OK;
}

function listOfStudents(exam){

    var studentInfo = document.createTextNode(exam.getExamInfo());
        var newList = document.createElement("li");
        newList.appendChild(studentInfo);
    if(exam.grade > 5){
        
        document.querySelector(".passed-list").appendChild(newList);
    }else{
      
        document.querySelector(".failed-list").appendChild(newList);
    }
}