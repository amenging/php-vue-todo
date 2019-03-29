const express = require('express')
const router = express.Router()

const Todo = require('../api/todo')

// 获取数据列表
router.post('/get_todo_lists', (req, res, next) => {
  Todo.getTodoLists(req, res)
})

// 添加清单
router.post('/add_todo_list', (req, res, next) => {
  Todo.addTodoList(req, res)
})

// 删除清单
router.post('/remove_todo_list', (req, res, next) => {
  Todo.removeTodoList(req, res)
})

// 修改清单
router.post('/edit_todo_list', (req, res, next) => {
  Todo.editTodoList(req, res)
})

// 添加事项
router.post('/add_todo_item', (req, res, next) => {
  Todo.addTodoItem(req, res)
})

// 删除事项
router.post('/remove_todo_item', (req, res, next) => {
  Todo.removeTodoItem(req, res)
})

// 编辑事项
router.post('/edit_todo_item', (req, res, next) => {
  Todo.editTodoItem(req, res)
})

// 修改事项状态
router.post('/change_todo_item_status', (req, res, next) => {
  Todo.changeTodoItemStatus(req, res)
})

module.exports = router