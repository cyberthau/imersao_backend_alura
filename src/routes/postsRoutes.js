import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controller/postsControler.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
    // objeto para acessar a rota dos banco de dados, para poder pegar todas as informações que estão em texto no json
    app.use(express.json());
    app.use(cors(corsOptions));
    // Rota para buscas todas os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost);
    // Rota para upload de imagens (assumindo uma unica imagem chamada "imagem")
    app.post("/upload",upload.single("imagem"), uploadImagem);
    // Rota para atualizar a imagem 
    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;
