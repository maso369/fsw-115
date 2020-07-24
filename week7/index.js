const form = document.mainForm

const liElements =[]
const myWrapper = document.getElementById("myListWithButtons")
const listUL = document.getElementById("theList");
let test = document.getElementById("test") 
const who = document.getElementById("assign");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputValue = document.getElementById("assign").value
    let dothis  = document.getElementById("dothis").value
    if (inputValue === "" ){
        alert("fill the open boxes!")
    }else{
        addListToDOM(inputValue)
    }
    document.getElementById("assign").value = "" ;
    document.getElementById("dothis").value=""
})
function addListToDOM(taskedItem){
    let theListItem = createTaskElement(taskedItem)
    console.log(listUL)
    console.log(listUL.children)
    listUL.insertBefore(theListItem, listUL.childNodes[0]); 
}

      
  
function  createTaskElement(addToLists){
    let listItem = document.createElement("li")
    let theLabel = document.createElement("label")
    let deleteButton = document.createElement("button")
    let who = document.getElementById("dothis").value
    theLabel.innerText = who + "   : " + addToLists + "." ;
    deleteButton.innerText = "Delete";
    listItem.onclick = clickedTask
    deleteButton.onclick = deleteAction
    deleteButton.className = "delete"
    listItem.appendChild(theLabel)
    listItem.appendChild(deleteButton)
    return listItem    
}
function deleteAction(){
    
    this.parentNode.parentNode.removeChild(this.parentNode)
}
function clickedTask(){
   
this.classList.toggle("checked")
}


document.getElementById("button3").addEventListener("click", ()=>{
    axios.get("https://rickandmortyapi.com/api/character/326")
.then(response=>{
    console.log(response)
    for(let i = 0; i < Object.values(response.data).length; i++){
        var rick = document.createElement("h3")
        document.body.appendChild(rick)
         rick.textContent = Object.values(response.data)[i]
         if(typeof Object.values(response.data)[i] =="object" ){
rick.textContent = Object.values(response.data)[i].name
         }
       }
})})


document.getElementById("button4").addEventListener("click", ()=>{
    axios.get("https://rickandmortyapi.com/api/character/52")
.then(response=>{
    console.log(response)
    for(let i = 0; i < Object.values(response.data).length; i++){
        var rick = document.createElement("h3")
        document.body.appendChild(rick)
         rick.textContent = Object.values(response.data)[i]
         if(typeof Object.values(response.data)[i] =="object" ){
rick.textContent = Object.values(response.data)[i].name
         }
       }
})})