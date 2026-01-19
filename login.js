var MenuItens = document.getElementById("Menu-itens");

MenuItens.style.maxHeight = "0px";

function menucelular() {
    if (MenuItens.style.maxHeight == "0px") {
        MenuItens.style.maxHeight = "200px";

    } else {
        MenuItens.style.maxHeight = "0px";

    }
}
var EntrarPainel = document.getElementById("EntrarPainel");
var cadastroSite = document.getElementById("cadastroSite");
var Indicador = document.getElementById("Indicador");

function Cadastro()
{
    cadastroSite.style.transform = "translateX(0px)"; 
    EntrarPainel.style.transform = "translateX(0px)"; 
    Indicador.style.transform = "translateX(0px)"; 
}
function Entrar()
{
    cadastroSite.style.transform = "translateX(300px)"; 
    EntrarPainel.style.transform = "translateX(300px)"; 
    Indicador.style.transform = "translateX(0px)"; 
}