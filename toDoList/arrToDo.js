
const list = [ { name: 'create a post', status: 'In Progress', priority: 'low'  }, { name: 'test', status: 'Done', priority: 'high'  } ]

const STATUS = {
    TO_DO : 'To Do:',
    IN_PROGRESS : 'In Progress:',
    DONE : 'Done:'
}

function addTask(arr, name, status, priority) {
    arr.push({name, status, priority});
}

function deleteTask(arr, name) {
    let delTask = arr.indexOf(name, 0);
    arr.splice(delTask - 1, 1);
}

function changeStatusPriority(arr, name, status, priority) {
    let changeTask = arr.indexOf(name, 0);
    arr.splice(changeTask -1, 1);
    arr.push({name, status, priority});
}

function showList(arr) {
    console.log(STATUS.TO_DO);
    let toDoTasks = arr.filter(item => item.status == 'To Do');
    for (let task of toDoTasks) {
        console.log(task.name);
    }
    console.log(STATUS.IN_PROGRESS);
    let inProgressTasks = arr.filter(item => item.status == 'In Progress');
    for (let task of inProgressTasks) {
        console.log(task.name);
    }
    console.log(STATUS.DONE);
    let doneTasks = arr.filter(item => item.status == 'Done');
    for (let task of doneTasks) {
        console.log(task.name);
    }
}

deleteTask(list, 'create a post');
addTask(list, 'drink beer', 'To Do', 'high');
changeStatusPriority(list, 'test', 'Done', 'low');
addTask(list, 'drink samogon', 'To Do', 'high');
addTask(list, 'go to the party', 'In Progress', 'high');
showList(list);

// console.log(list);