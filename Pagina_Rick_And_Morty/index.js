const url='https://rickandmortyapi.com/api/character'
fetch(url)
.then(respuesta=>respuesta.json())
.then(dato=>{
    console.log(dato)
    let personajes=document.getElementById('personaje')
    personajes.innerHTML=dato.results.map(
        dato=>`<p>${dato.name}</p> <img src='${dato.image}'/>`
    )
})
.catch(error=>console.log(error))