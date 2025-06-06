import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // Novo import para converter URL em caminho de arquivo

// __dirname não existe em módulos ESM, então precisamos recriá-lo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000; // Usa a porta 3000 por padrão, ou uma definida pelo ambiente

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Rota padrão para servir o index.html (já está coberta pelo express.static)
// Mas podemos ter uma rota explícita para mostrar como funciona
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Outra rota de exemplo (opcional)
app.get("/about", (req, res) => {
    res.send(
        "<h1>Sobre a Aplicação</h1><p>Esta é uma aplicação simples para a oficina de Docker.</p>"
    );
});

app.listen(port, "0.0.0.0", () => {
    // '0.0.0.0' é importante para o Docker
    console.log(`Servidor rodando em http://0.0.0.0:${port}`);
    console.log(`Acesse no seu navegador: http://localhost:${port}`);
});
