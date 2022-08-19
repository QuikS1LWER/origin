const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(obj, task, status) {
    obj[task] = status;
}

function addTask(obj, task) {
    obj[task] = 'To Do';
}

function deleteTask(obj, task) {
    delete obj[task];
}

function showList(obj) {
    console.log('Todo:');
    for (key in obj) {
        if (obj[key] == 'To Do') {
            console.log(key);
        }
    }
    console.log('In Progress:');
    for (key in obj) {
        if (obj[key] == 'In Progress') {
            console.log(key);
        }
    }
    console.log('Done:')
    for (key in obj) {
        if (obj[key] == 'Done') {
            console.log(key);
        }
    }
}

/*changeStatus(list, 'write a post', 'Done');*/
/*deleteTask(list, 'make a bed')*/
addTask(list, 'finish Todo')
showList(list);
console.log(list);