export default {
  getTaskById: state => id => {
    const tasks = []
    state.taskmanagement.board.lists.forEach(list => {
      tasks.push(...list.items)
    })
    return tasks.find(task => task.id === id)
  }
}
