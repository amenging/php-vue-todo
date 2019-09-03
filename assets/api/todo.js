import axios from 'axios'

// 获取数据列表
export async function getTodoAll (params) {
  return await axios.post('/api/todo/get_todo_all', {...params })
}

// 获取清单
export async function getTodoLists (params) {
  return await axios.post('/api/todo/get_todo_lists', { ...params })
}

// 获取事项
export async function getTodoItems (params) {
  return await axios.post('/api/todo/get_todo_items', { ...params })
}

// 添加清单
export async function addTodoList (params) {
  return await axios.post('/api/todo/add_todo_list', { ...params })
}

// 删除清单
export async function removeTodoList (params) {
  return await axios.post('/api/todo/remove_todo_list', { ...params })
}

// 修改清单
export async function editTodoList (params) {
  return await axios.post('/api/todo/edit_todo_list', { ...params })
}

// 添加事项
export async function addTodoItem (params) {
  return await axios.post('/api/todo/add_todo_item', { ...params })
}

// 删除事项
export async function removeTodoItem (params) {
  return await axios.post('/api/todo/remove_todo_item', { ...params })
}

// 编辑事项
export async function editTodoItem (params) {
  return await axios.post('/api/todo/edit_todo_item', { ...params })
}

// 导入清单
export async function importFile (params) {
  return await axios.post('/api/todo/import_file', { ...params })
}
