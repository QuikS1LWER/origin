const list = {
    'create a task': 'In Progress',
    'make a bed': 'Done',
    'write a post': 'To Do',
   }

addTask(list, 'make a table');
addTask(list, 'clean the room');
addTask(list, 'learn JS');
addTask(list, 'end this fucking problem');
// deleteTask(list, 'make a bed');
changeStatus(list, 'write a post', 'In Progress');
changeStatus(list, 'end this fucking problem', 'In Progress');
showList(list);

   function addTask(obj, task) {
        obj[task] = 'To Do';
   }

   function deleteTask(obj, task) {
        delete obj[task];
   }

   function changeStatus(obj, task, status) {
        obj[task] = status;
   }
   function showList(obj) {
    console.log('Todo:');   
        for (key in obj) {
            if (obj[key] === 'To Do') {
            console.log(key);
            }
        }
    console.log('In Progress:');
        for (key in obj) {
            if (obj[key] === 'In Progress') {
                console.log(key);
            }
        }
    console.log('Done:');
        for (key in obj) {
            if (obj[key] === 'Done') {
                console.log(key);
            }
        }
   }

//    console.log(list)