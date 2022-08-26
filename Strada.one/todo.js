/*const list = {
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

changeStatus(list, 'write a post', 'Done');
deleteTask(list, 'make a bed')
addTask(list, 'finish Todo')
showList(list);
console.log(list);*/


const list = [ { name: 'create a post', status: 'in progress', priority: 'low'  }, { name: 'test', status: 'done', priority: 'high'  } ]

function changeStatus(arr, task, newStatus, newPriority) {
    let changeTask = arr.find(function(item) {return item.name == task});
    changeTask.status = newStatus;
    changeTask.priority = newPriority;
}

function addTask(arr, task) {
    arr.push(task);
}

function deleteTask(arr, task) {
    let index = arr.findIndex(function(item) {return item.name == task});
    arr.splice(index, 1);
}

function showList (arr) {
    console.log('To do:');
    arr.forEach(function(item) {if (item.status == 'to do') {console.log(item.name, '* priority -', item.priority)}});
    console.log(('In Progress:'));
    arr.forEach(function(item) {if (item.status == 'in progress') {console.log(item.name, '* priority -', item.priority)}});
    console.log('Done:');
    arr.forEach(function(item) {if (item.status == 'done') {console.log(item.name, '* priority -', item.priority)}});
}



addTask(list, {name: 'finish todo', status: 'in progress', priority: 'high'});
addTask(list, {name: 'relax', status: 'to do', priority: 'low'});
changeStatus(list, 'create a post', 'done', 'high');
deleteTask(list, 'test');
showList(list);

