const userMessage = document.querySelector("#user_message")
const button = document.querySelector("#add")
const message = document.querySelector(".message")


message.style.display = "none"
function addTodo() {
    const table = document.createElement("table")
    // const table_a = document.createElement("table")
    const newButton = document.createElement("button")
    
    table.innerText = userMessage.value
    let notice = document.createElement("h2")
    
    if (userMessage.value === ""){
        
        notice.innerText="Enter a task"
        button.nextElementSibling.append(notice)

        let button_length =button.nextElementSibling.children.length
        
         
        if (button_length == 2){
            
            notice.remove()
            
        }
    }
    else{
        message.style.display = "block"
       message.append(table, newButton)
       userMessage.value = ""

        notice.style.display = "none"
        newButton.innerText = "delete"
        
        newButton.setAttribute("value", "delete")
        console.log(newButton.value)
        console.log(newButton)
        newButton.addEventListener("click", ()=>{
        message.removeChild(table)
        message.removeChild(newButton)
        
       })
    
    }

        // if (button.nextElementSibling.nextElementSibling.childNodes.length < 1 ) {
        //     button}
        
}

button.addEventListener("click", addTodo)   