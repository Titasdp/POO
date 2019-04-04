document.querySelector("#date").max = new Date().getFullYear()


const movies = []



let form = document.querySelector("form")
form.addEventListener("submit", function (event) {
    //Obter dados do formulario
    const name = document.querySelector("#movieTitle").value;
    const gener = document.querySelector("#gener").value;
    const date = document.querySelector("#date").value;
    const cover = document.querySelector("#cover").value;
    const trailer = document.querySelector("#trailer").value;
    //1.Verificar a existencia do file no array



    //3
    if (AddIfPossible(name) === true) {
        //2. se nao existir,
        //2.1 Criar um objeto movie
        let movie = {
            name: name,
            gener: gener,
            date: date,
            cover: cover,
            trailer: trailer
        }
        //2.2Inserir o objeto movie num array
        movies.push(movie)
        console.table(movies)

        renderTable() 

        


    }
    else {
        alert("O titulo ja existe");
    }

    event.preventDefault();





})


function AddIfPossible(a) {


    for (let movie of movies) {

        if (movie.name.toLowerCase() === a.toLowerCase()) {
            return false;
        }



    }
    return true
}


function renderTable() {

    const table = document.querySelector("table")


    table.innerHTML = ` <tr>
    <th>
        Titulo
    </th>
    <th>
        Genero
    </th>
    <th>
        options
    </th></tr>`

    for (let movie of movies) {
        table.innerHTML += `<tr id="${movie.name}"><td>${movie.name}</td><td>${movie.gener}</td><td><button onclick="seeCover(${movie.cover})" >VER CAPA</button><button>VER TRAILER</button><button class="${movie.name}">REMOVER</button></td></tr>`
    }
    console.log(table)
}

function seeCover(cover){
    


    let dialog= document.querySelector("#dlgcover")


   let img= dialog.querySelector("img")

   img.src=cover

   document.querySelector("#dlgcover").showModal();









}




























































