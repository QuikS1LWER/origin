const list = {
    'create a task': 'In Progress',
    'make a bed': 'Done',
    'write a post': 'To Do',
}

const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
    HOLD: 'On Hold',
}

function addTask(name, task) {
    name[task] = STATUS.TO_DO;
}

function deleteTask(name, task) {
    delete name[task];
}

function changeStatus(name, task, status) {
    name[task] = status;
}

function showList(name) {
    console.log('To Do:');
    for (let task in name) {
        if (name[task] === STATUS.TO_DO) {
            console.log(task);
        }
    }
    console.log('In Progress:');
    for (let task in name) {
        if (name[task] === STATUS.IN_PROGRESS) {
            console.log(task);
        }
    }
    console.log('Done:');
    for (let task in name) {
        if (name[task] === STATUS.DONE) {
            console.log(task);
        }
    }
    console.log('On Hold:');
    for (let task in name) {
        if (name[task] === STATUS.HOLD) {
            console.log(task);
        }
    }
}

addTask(list, 'make a table');
addTask(list, 'clean the room');
addTask(list, 'learn JS');
changeStatus(list, 'write a post', 'In Progress');
changeStatus(list, 'create a task', 'On Hold');
deleteTask(list, 'make a table');
showList(list);

// console.log(list)