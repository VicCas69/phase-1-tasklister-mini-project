document.addEventListener("DOMContentLoaded", () => {
  const f = document.querySelector('form')
  f.addEventListener('submit',(event)=>{
    event.preventDefault()
    creatingList(event.target.new_task_description.value)
    

  })
})

function creatingList(task){
  const p = document.createElement('p')
  const btn = document.createElement('button')
  btn.textContent = 'X'
  btn.addEventListener('click', handleDelete)
  p.textContent = task
  p.appendChild(btn)
  document.getElementById("tasks").appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}


