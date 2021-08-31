export default {
  addTaskList: (id,category, title, description) => {
    return {
      id: id,
      category: category,
      title: title,
      description:description
    }
  }
}