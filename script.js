const TASK_INPUT = document.getElementById("task-input");
const CHECKLIST = document.getElementById("checklist");

const MAX_TASK_COUNT = 15;
var currentTaskAmount = 0;

TASK_INPUT.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {  // Check if Enter was pressed
        addTask();             // Call your function
    }
});


function addTask(){
    if (currentTaskAmount >= MAX_TASK_COUNT){
        return;
    }

    if (TASK_INPUT.value != ""){
        let checkbox = document.createElement('input');
        let label = document.createElement('label');
        checkbox.type = 'checkbox';

        checkbox.onclick = () => {
            if (checkbox.checked){
                label.className = "checkbox-checked";
            }else{
                label.className = "checkbox-unchecked";
            }
        };
        label.setAttribute("name", "checkbox-item-label");
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(" " + TASK_INPUT.value));
        CHECKLIST.appendChild(label);
        
        TASK_INPUT.value = "";
        currentTaskAmount += 1;
    }
}

function clearAllTasks(){
    CHECKLIST.innerHTML = '';
    currentTaskAmount = 0;
}

function clearCompletedTasks(){
    const labels = CHECKLIST.children;
    for (const label of labels){
        if (label.className === "checkbox-checked"){
            CHECKLIST.removeChild(label);
            currentTaskAmount -= 1;
        }
    }
}