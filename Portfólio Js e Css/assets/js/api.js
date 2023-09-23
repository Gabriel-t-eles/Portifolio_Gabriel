
async function fetchProfileData(){
    // Define a URL de onde você deseja buscar os dados do perfil.
    const url ='https://raw.githubusercontent.com/GabrielTelessss/js-developer-portfolio/main/data/profile.json'
    
     // Faz uma requisição à URL usando a função fetch(). O "await" indica que a função irá esperar pela resposta da requisição antes de continuar.
    const fetching = await fetch(url)

    // Retorna os dados do perfil que foram obtidos da resposta da requisição.
    return await fetching.json()
}

