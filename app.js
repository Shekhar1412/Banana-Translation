var input = document.querySelector("#input");
var  btn = document.querySelector("#btn")
var out = document.querySelector("#output");

var serverURL  = "https://api.funtranslations.com/translate/minion.json?text=";

function errorHandler(error)
{
    console.log("Some error occured", error);
    alert("Something is wrong with the server !!!");
}

function doFetch(){
    const inputText =input.value;

    fetch(serverURL +inputText ).
    then(response=> response.json()).
    then(json => out.value = json.contents.translated ).
    catch(errorHandler);
}
btn.addEventListener("click", doFetch);