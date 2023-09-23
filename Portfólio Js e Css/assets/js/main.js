

(async () =>{
    // A resposta da requisição é armazenada na variável "fetching". Agora, usamos "await" novamente para esperar a conversão da resposta em um objeto JSON.
    const profileData = await fetchProfileData()
    console.log(profileData)
})()