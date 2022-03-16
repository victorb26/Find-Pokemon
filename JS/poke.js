class Pokemon{
    constructor(){
        this.pNome=document.getElementById("nome").value
    }
    nome(){
        return this.pNome
    }
    api(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.pNome}`)
        .then(resposta=>resposta.json())
        .then(function(poke){
            document.getElementById("sprite").src=poke.sprites.front_default
        })
    }
}
function pokemon(){
    var start = new Pokemon()
    start.nome()
    start.api()
    document.getElementById("personagens").style.display = "flex";
}