const service = require('../service/service')
const serviceface = require('../service/facebook')
servicegithubrepos = service("https://api.github.com/users/wartelon/repos")
servicegithub = service("https://api.github.com/users/wartelon")
const dados = require('../Helpers/dadosperfil')

async function  main (req, res) {
   try{
       const githubservice = await servicegithub
       const faceservice = await serviceface.get()
       const githubrepos = await servicegithubrepos  

       const { name = login, bio, avatar_url, html_url } = githubservice
       const { firt_name, last_name, gender , birthday, email  } = faceservice

       const repos = githubrepos.data.map( repo =>{
           let  Gitrepos = {
               size: repo.size,
               name: repo.name,
               url: repo.url
           }
           return Gitrepos;
       });

       const listrepos =  repos.slice(0,3).sort((a, b )=>{
           if (a.size < b.size) return 1;
           if (a.size > b.size) return -1;
       })

       const perfil = {
        "Nome: ": name,
        "Data de nascimento": birthday,
        "Endereço: ": "Rua Romulo da Fonseca Gomes, Recife, Pe",
        "E-mail: ": email,
        "Genero: ": gender,
        "Bio: ": bio,
        "Foto": avatar_url,
        "Formação": dados.formação,
        "Experiência Profissional": dados.experiencia,

        "Github": {
          "URL Perfil" : html_url,
          "Alguns Repositórios":listrepos,
       }
   }

   return res,json(perfil);

} catch (err){
    console.error ("ERRO:", err)
}
}
module.exports = main 
