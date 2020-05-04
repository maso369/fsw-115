const xhr =  new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon" , true)
xhr.send()

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) { 
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);
        showData(data.objects[0]);
    
    }
}

function showData(data){
    for(let i = 0; i < data.pokemon.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data.pokemon[i].name
        document.body.appendChild(h1)
    }
}
