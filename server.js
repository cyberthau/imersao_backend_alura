import express from "express";
import routes from "./src/routes/postsRoutes.js";


// array para criar a 'base de dados', contendo a descrição e o caminho da imagem, no caminho da imagem está uma url com uma foto de um gatinho
const posts = [
    { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato brincando com um novelo de lã", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gatinho dormindo em uma caixa", imagem: "https://placecats.com/millie/300/150" },
    { id: 4, descricao: "Gato olhando pela janela", imagem: "https://placecats.com/millie/300/150" },
    { id: 5, descricao: "Gatos brincando", imagem: "https://placecats.com/millie/300/150" },
    { id: 6, descricao: "Gatinho curioso", imagem: "https://placecats.com/millie/300/150" },
     
];

// função para informar ao serivdor o que é necessário fazer na função app.listen(3000...) está declarado o nome da porta ao qual o serivdor irá se conectar
const app = express();
app.use(express.static("uploads"))
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});


