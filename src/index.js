document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskinput = document.querySelector('#new_task_description')
document.querySelector('#create-task-form').addEventListener('submit', (e) => {
  e.preventDefault()
  handleToDo(e.target.new_task_description.value)
  document.querySelector('#create-task-form').reset()
})
});

function handleToDo(todo){
  console.log(todo)
let li = document.createElement('li')
let btn = document.createElement('button')
btn.textContent = 'x'
li.textContent = `${todo}`
btn.addEventListener('click', handleDelete)
li.appendChild(btn)
console.log(li)
document.querySelector('#tasks').appendChild(li)
}
function handleDelete(e){
  e.target.parentNode.remove()
}