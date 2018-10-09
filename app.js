

let txtAddTask = document.querySelector("#txtAddTask")
let btnAddTask = document.querySelector("#btnAddTask")
let ulPendingTaskList = document.querySelector("#ulPendingTaskList")
let ulCompletedTaskList = document.querySelector("#ulCompletedTaskList")
let listLiteralPending = ""


btnAddTask.addEventListener('click', function() {
    let txtAddTaskInput = txtAddTask.value;
 

    listLiteralPending += 
    `<li>
        <input type='checkbox' onchange='checkBoxChange(this)'>${txtAddTaskInput}
        <button onclick='removeItem(this)'>Remove Item</button>
    </li>`

    // Append to pending tasks
    ulPendingTaskList.innerHTML = listLiteralPending
    // ulPendingTaskList.insertAdjacentHTML("beforebegin",listLiteralPending)

});



function checkBoxChange(sender) {
    if (sender.checked == true) {
        console.log("true")
        ulCompletedTaskList.appendChild(sender.parentElement)

    } else {
        console.log("false")
        ulPendingTaskList.appendChild(sender.parentElement)
    }

}



function removeItem(sender) {

    let parent = sender.parentElement
    let liparent = parent.parentElement

    console.log(sender)     // button
    console.log(parent)     // li
    console.log(liparent)   // liparent

    if(liparent.id == "ulPendingTaskList") {
        // console.log("1")
        parent.parentElement.removeChild(parent)
    }  
    else {
        // console.log("2")
        parent.parentElement.removeChild(parent)
    }  

}
