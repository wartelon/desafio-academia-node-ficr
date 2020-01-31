const axios = require('axios')

async function service(url){
      return await axios.get(url)
}
module.exports = service;

//"https://api.github.com/users/wartelon/repos"




/*
const dados = usuGitRepos();
dados.then(function(response){
   console.log(response)

})
.catch(function(err){
    console.error("DEU RUIM",err)
})
*/



/*
axios.get("https://api.github.com/users/wartelon")
.then(function(response){
    console.log ("resposta",response)
})
.catch(function(err){
    console.log("DEU RUIM",err)

})
*/



/*
const URl = "https://api.github.com/users/wartelon"
async function obterperfil() { 
    const url = `${URL}`
    const  response = await axios.get(url)
    console.log(response) 
}

async function obterrepos(){
    const url = `${URL}/repos`
    const response = await axios.get(url)
    console.log(response)
}

obterperfil()
obterrepos()
*/