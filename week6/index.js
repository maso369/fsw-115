axios.get("https://rickandmortyapi.com/api/character/61")
.then(response=>{
 

       for(let i = 0; i < Object.values(response.data).length; i++){
        var rick = document.createElement("h3")
        document.body.appendChild(rick)
         rick.textContent = Object.values(response.data)[i]
         if(typeof Object.values(response.data)[i] =="object" ){
rick.textContent = Object.values(response.data)[i].name
         }
       }
       

    console.log(Object.values(response.data))
})
axios.get("https://rickandmortyapi.com/api/character/332")     
.then(response=>{
    for(let i = 0; i < Object.values(response.data).length; i++){
        var rick = document.createElement("h4")
        document.body.appendChild(rick)
         rick.textContent = Object.values(response.data)[i]
         if(typeof Object.values(response.data)[i] =="object" ){
            rick.textContent = Object.values(response.data)[i].name
                     }
       }
        
         
        
    console.log(response.data)
})
axios.get("https://rickandmortyapi.com/api/character/201")
.then(response=>{
    for(let i = 0; i < Object.values(response.data).length; i++){
        var rick = document.createElement("h5")
        document.body.appendChild(rick)
         rick.textContent = Object.values(response.data)[i]
         if(typeof Object.values(response.data)[i] =="object" ){
            rick.textContent = Object.values(response.data)[i].name
                     }
       }
        
    console.log(response.data)
})