
//Consumo del servicio de spotyfy para
//traer canciones de un artista


//DEFINIR LA VARIABLE PARA RECIBIR LA ETIQUETA DE IMG1, titulos, audio
let imagen1 = document.getElementById("imagen1");
let imagen2 = document.getElementById("imagen2");
let imagen3 = document.getElementById("imagen3");
let titulo1= document.getElementById("titulo1");
let titulo2= document.getElementById("titulo2");
let titulo3= document.getElementById("titulo3");
let audio1 = document.getElementById("audio1");
let audio2= document.getElementById("audio2");
let audio3 = document.getElementById("audio3");



//1. Definir la URL del servicio
let url = "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz/top-tracks?country=US";

//2. Definir el token o permiso de acceso
let token = "Bearer BQBKJDXUxMjmNpC1LprfjVvvY7DWWpt3W55KxlBopnNYeT52-d3adEZklMpR0U2XtSx5_p7orOj2_T5y66dfrB_vR0OSiWlkektzF_Qn_xKC6YLYWpX7joP3siaprHACSYy5k8rBXjXGUed10Z5widzotbULHyc";
    //3.Definir Objeto AJAX
let objetoAJAX = new XMLHttpRequest();

//4. Abrir la conexion
objetoAJAX.open('GET', url, true);

//5. crear encabezado de conexion
objetoAJAX.setRequestHeader('Authorization', token);

//6. cargamos los datos del servicio
objetoAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);

    console.log(respuesta);
    imagen1.src = respuesta.tracks[0].album.images[0].url;
    imagen2.src = respuesta.tracks[1].album.images[0].url;
    imagen3.src = respuesta.tracks[2].album.images[0].url;
    titulo1.textContent  = respuesta.tracks[0].album.name;
    titulo2.textContent  = respuesta.tracks[1].album.name;
    titulo3.textContent  = respuesta.tracks[2].album.name;
    audio1.src= respuesta.tracks[0].preview_url;
    audio2.src= respuesta.tracks[1].preview_url;
    audio3.src= respuesta.tracks[2].preview_url;






}

//7. enviamos la peticion
objetoAJAX.send();    