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
    let button_length =button.nextElementSibling.children.length

    if (userMessage.value === "" ){
        
        notice.innerText="Enter a task"
        button.nextElementSibling.append(notice)

        console.log(userMessage.value)
        
         
        if (button_length == 1){
            
            notice.remove()
            
        }
    }
    else{
        message.style.display = "block"
        message.append(table, newButton)
        userMessage.value = ""
        const setIt = userMessage.setAttribute("onfocus", "true")
        if (button_length == 1){
            console.log(setIt)
        }
        else{
            console.log("no")
            console.log(button_length)
        }
        notice.style.display = "none"
        newButton.innerText = "delete"
        
        
        
        newButton.addEventListener("click", ()=>{
            message.removeChild(table)
            message.removeChild(newButton)
        
       })
    
    }

        // if (button.nextElementSibling.nextElementSibling.childNodes.length < 1 ) {
        //     button}
        
}

button.addEventListener("click", addTodo)   