const tasks = {
    tasks: [{
        text: 'gocery',
        completed: true
    },
    {
        text: 'clean yard',
        completed: false
    },
    {
        text: 'film',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
}



console.log(tasks.getTasksToDo())