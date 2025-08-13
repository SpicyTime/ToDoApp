const taskInput = document.getElementById("taskInput");

const checklist = document.getElementById("checklist");
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {  // Check if Enter was pressed
        addTask();             // Call your function
    }
});

function addTask(){
    if (taskInput.value != ""){
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        checkbox.type = 'checkbox';
        //checkbox.id = 'checkbox';

        checkbox.onclick = () => {
            if (checkbox.checked){
                label.className = "checkbox-checked";
            }else{
                label.className = "checkbox-unchecked";
            }
        };
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(" " + taskInput.value));
        

        checklist.appendChild(label);
        
        taskInput.value = "";
    }
}

function clearAllTasks(){
    checklist.innerHTML = '';
}

function clearCompletedTasks(){
    const labels = checklist.children;
    for (const label of labels){
        if (label.className === "checkbox-checked"){
            checklist.removeChild(label);
        }
    }
}