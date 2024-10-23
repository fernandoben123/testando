const express = require("express"); //importa o módulo nesse arquivo
const app = express(); //iniciando o express

// criando a rota inicial 

app.get("/", function(req,res){
    res.send("Bem vindo ao meu site!")
})

// rota de cadastro de produtos

app.get("/produtos", function(req,res){
    res.send("<h1>Lista de produtos!<h1>");
})

// rota com parametro 
app.get("/consultas/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})

// rota com parametro opcional
app.get("/cadastro/:nome?", function(req,res){
    // req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if(nome){
        res.send("<h1>produto " + nome + " criado!<h1>")
    } else {
        res.send("produto criado!")
    }
})

app.listen(4000,function(erro){ // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao iniciar")
    } else {
        console.log("Servidor iniciado")
    }
})