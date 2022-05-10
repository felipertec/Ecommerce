const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user")

dotenv.config();

/**
 * Conexão com banco de dados mongoose utilizando o mongoose atlas
 */
mongoose.connect(process.env.MONGO_URL)
 .then(()=>console.log("Banco de dados conectado com sucesso!!!"))
 .catch((err) =>{
    console.log(err);
});

/**
 * Chamada da rota
 */
app.use(express.json())
app.use("/api/users", userRouter);

app.listen(process.env.PORT || 5000, () => {
   console.log("Servidor esta rodando!!!"); 
})
