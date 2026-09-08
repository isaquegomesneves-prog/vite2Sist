import { useState, useEffect } from 'react';
import './App.css'; // Mantenha seus estilos CSS originais aqui

function App() {
  // 1. Estados para armazenar as listas de cartas vindas do backend
  const [cartasAliadas, setCartasAliadas] = useState([]);
  const [cartasInimigas, setCartasInimigas] = useState([]);

  // 2. useEffect para buscar os dados da API assim que a tela carregar
  useEffect(() => {
    fetch('http://localhost:3000/api/cartas')
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Erro ao conectar com o servidor backend');
        }
        return resposta.json();
      })
      .then((dados) => {
        // Atualiza os estados com os dados recebidos da API
        // OBS: Ajuste "dados.aliadas" e "dados.inimigas" caso os nomes no seu backend sejam diferentes
        setCartasAliadas(dados.aliadas || []);
        setCartasInimigas(dados.inimigas || []);
      })
      .catch((erro) => {
        console.error("Erro na integração com o backend:", erro);
      });
  }, []); // Array vazio garante que a requisição ocorra apenas uma vez

  return (
    <div className="painel-container" style={{ display: 'flex', padding: '20px', backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'serif' }}>

      {/* Lado Esquerdo: Painel de Informações */}
      <div className="painel-lateral" style={{ width: '250px', marginRight: '40px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 10px 0', lineHeight: '1.2' }}>
          Painel de<br />Controle 3SIS
        </h1>
        <p style={{ fontSize: '14px', color: '#555' }}>
          Aguardando integração<br />com o backend...
        </p>
      </div>

      {/* Lado Direito: Área do Jogo/Tabuleiro */}
      <div className="tabuleiro-central" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>

        {/* Mão do Inimigo (Topo) */}
        <div className="mao-inimigo" style={{ display: 'flex', gap: '10px', minHeight: '40px' }}>
          {cartasInimigas.map((carta) => (
            <div className="carta inimigo" key={carta.id} style={{ padding: '8px 12px', border: '1px solid red', borderRadius: '4px', backgroundColor: '#fff1f1' }}>
              {carta.nome}
            </div>
          ))}
        </div>

        {/* Grid 3x3 Central (O que já aparece na sua foto) */}
        <div className="grid-3x3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gridTemplateRows: 'repeat(3, 100px)', gap: '4px', backgroundColor: '#1a1a2e', padding: '6px', borderRadius: '8px' }}>
          {[...Array(9)].map((_, index) => (
            <div key={index} className="quadrado-grid" style={{ backgroundColor: '#333333', borderRadius: '4px' }}></div>
          ))}
        </div>

        {/* Mão do Aliado (Baixo) */}
        <div className="mao-aliado" style={{ display: 'flex', gap: '10px', minHeight: '40px' }}>
          {cartasAliadas.map((carta) => (
            <div className="carta" key={carta.id} style={{ padding: '8px 12px', border: '1px solid green', borderRadius: '4px', backgroundColor: '#f1fff1' }}>
              {carta.nome}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;