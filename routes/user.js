const router = require("express").Router();

/**
 * Rotas 
 * Get => Pega todos os dados
 * POST => Cria algum Dado
 * PUT => Altera algum dado
 * Delete => Delet algum Dado 
 */

router.get("/userteste", (req,res) =>{
    res.send("usuario criado com sucesso!")
})

router.post("/userpostteste", (req,res) =>{
    const username = req.body.username
    res.send(`Seu usuario é: ${username}`)
})

module.exports = router