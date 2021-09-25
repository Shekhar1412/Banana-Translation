var input = document.querySelector("#input");
var  btn = document.querySelector("#btn")
var out = document.querySelector("#output");

var serverURL  = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="

function doFetch(){
    const inputText =input.value;
    
    fetch(serverURL+ inputText ).
    then(response=> response.json()).
    then(json=> out.value = json.contents.translated);
}
btn.addEventListener("click", doFetch);