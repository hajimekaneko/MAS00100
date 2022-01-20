export default {
  getTaskById: state => id => {
    const tasks = []
    console.log("力尽きた20220121")
    state.board.lists.forEach(list => {
      tasks.push(...list.items)
    })
    return tasks.find(task => task.id === id)
  }
}
