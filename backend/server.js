const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const cartasAliadas = [
    { id: 1, nome: "Lobo Guará Veloz", forca: 7, img: "https://picsum.photos" },
    { id: 2, nome: "Arara Protetora", forca: 5, img: "https://picsum.photos" },
    { id: 3, nome: "Onça Pintada Alfa", forca: 9, img: "https://picsum.photos" },
    { id: 4, nome: "Capivara Curandeira", forca: 4, img: "https://picsum.photos" },
    { id: 5, nome: "Mico Leão Dourado", forca: 6, img: "https://picsum.photos" }
];

const cartasInimigas = [
    { id: 6, nome: "Cobra Coral Venenosa", forca: 7, img: "https://picsum.photos" },
    { id: 7, nome: "Jacaré do Papo Amarelo", forca: 8, img: "https://picsum.photos" },
    { id: 8, nome: "Gavião Carcará Sombrio", forca: 6, img: "https://picsum.photos" },
    { id: 9, nome: "Escorpião Negro", forca: 5, img: "https://picsum.photos" },
    { id: 10, nome: "Javali Furioso", forca: 8, img: "https://picsum.photos" }
];

app.get('/api/status', (req, res) => {
    res.json({ mensagem: "Backend Node 3SIS Operante!" });
});

app.get('/api/cartas', (req, res) => {
    res.json({
        aliadas: cartasAliadas,
        inimigas: cartasInimigas
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando com sucesso na porta ${PORT}!`);
});

