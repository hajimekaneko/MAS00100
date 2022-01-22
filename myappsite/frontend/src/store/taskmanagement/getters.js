export default {
  getTaskById: state => id => {
    const tasks = []
    console.log(state.board.lists)
    state.board.lists.forEach(list => {
      
      tasks.push(...list.tasks)
    })
    return tasks.find(task => task.taskId === id)
  }
}
