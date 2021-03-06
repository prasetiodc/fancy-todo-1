var idProjectSelected = null
let idTodoSelected = null

if (!localStorage.getItem('token')) {
  $('#loginForm').show()
  $('#registerForm').hide()
  $('#content').hide()
} else {
  $('#loginForm').hide()
  $('#registerForm').hide()
  $('#content').show()
  $('#navbarDropdown').append(localStorage.getItem('userName'))
  listTodo()
  listProject()
}

function myTodo(){
  $('#todo').show()
  $('#project').hide()
}

function myProject(){
  $('#project').show()
  $('#todo').hide()
}

function back() {
  $('#loginForm').show()
  $('#registerForm').hide()
}

function createTodo() {
  $('#detail-todo').empty()
  $('#addTodo').show()
}

$(document).ready(function () {
  
  $("#due-date").datepicker();
  $("#due-date").datepicker("option", "dateFormat", "yy-mm-dd");
  $("#due_date").datepicker();
  $("#due_date").datepicker("option", "dateFormat", "yy-mm-dd");
  $("#due_dateTodoProject").datepicker();
  $("#due_dateTodoProject").datepicker("option", "dateFormat", "yy-mm-dd");

  listProject()
  $('#email').val('')
  $('#password').val('')
  $('#form-login').submit(login)
  $('#form-addTodo').submit(addMyTodo)
  $('#form-addProject').submit(addProject)
  $('#registerForm').submit(register)
  $('#form-addMember').submit(addMember)
  
  listTodo()
  $('#addTodo').hide()
  $('#todo').hide()
  $('#project').hide()
  $('#addProject').hide()
  $('#editTodo').hide()
})
