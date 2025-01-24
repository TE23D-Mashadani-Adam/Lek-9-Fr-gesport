let fråga_ruta = document.querySelector(".fråga");
let svar_ruta = document.querySelector("#svar_input");
let knapp = document.querySelector(".btn");
let facit_ruta = document.querySelector(".facit_ruta");
let ny_fråga_btn = document.querySelector(".ny_fråga_btn");

//Variabler för att lägga till länder och huvudstäder
let nyttLand = document.querySelector("#nytt_land_input");
let nyttHuvudstad = document.querySelector("#ny_huvudstad_input");

let länder = ["Sverige", "Danmark", "Tyskland", "Syrien", "Frankrike"];
let huvudstäder = ["Stockholm", "Copenhagen", "Berlin", "Damascus", "Paris"];

let nuvarandeNummer = 0;

function VisaFråga() 
{
    let slumptal = parseInt(Math.random() * länder.length);
    nuvarandeNummer = slumptal;
    fråga_ruta.textContent = "Vilken huvudstad för:  " + länder[slumptal];
    svar_ruta.value = "";
}

function VisaSvar() 
{
    facit_ruta.textContent = huvudstäder[nuvarandeNummer];
}

function LäggTill()
{
    if (nyttLand.value != "" && nyttHuvudstad.value != "")
    {
        länder.push(nyttLand.value);
        huvudstäder.push(nyttHuvudstad.value);
    }else
    {
        alert("Är du en idiot?");
    }
}

