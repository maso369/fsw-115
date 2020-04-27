var species = {
    "name": "Droid",
    "classification": "artificial",
    "designation": "sentient",
    "average_height": "n/a",
    "skin_colors": "n/a",
    "hair_colors": "n/a",
    "eye_colors": "n/a",
    "average_lifespan": "indefinite",
    "homeworld": null,
    "language": "n/a",
    "people": [
        "http://swapi.dev/api/people/2/",
        "http://swapi.dev/api/people/3/",
        "http://swapi.dev/api/people/8/",
        "http://swapi.dev/api/people/23/"
    ],
    "films": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/4/",
        "http://swapi.dev/api/films/5/",
        "http://swapi.dev/api/films/6/"
    ],
    "created": "2014-12-10T15:16:16.259000Z",
    "edited": "2014-12-20T21:36:42.139000Z",
    "url": "http://swapi.dev/api/species/2/"
}

var list = document.getElementById("droid")

// var list = "hello world"

// console.log(Object.keys(droid))

// for (var i = 0; i < Object.keys(droid).length; i++){
//     var li = document.createElement("li")
//     list.append(li)
//     list.innerHTML += "<h1>" + Object.keys(droid)[i] + "</h1>"
// }

list.style.color = "blue"
list.style.textAlign = "justify"
list.style.fontSize = "35px"

console.log(list)

list.innerHTML = "<li>" + species.name + "</li>" + "<li>" + species.classification + "</li>" + "<li>" + species.designation + "</li>" + "<li>" + species.average_height + "</li>" + "<li>" + species.skin_colors + "</li>" + "<li>" + species.hair_colors + "</li>" + "<li>" + species.eye_colors + "</li>" + "<li>" + species.average_lifespan + "</li>" + "<li>" + species.homeworld + "</li>" + "<li>" +species.language + "</li>" + "<li>" + species.people[0] + "</li>" + "<li>" + species.people[1] + "</li>" + "<li>" + species.people[2] + "</li>" + "<li>" + species.people[3] + "</li>" 

