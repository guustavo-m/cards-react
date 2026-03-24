//App.jsx dados vem e o map rola
import Card from './components/Card'
import './App.css'
import helloworld from "./assets/img/helloworld.png"
import i1 from "./assets/img/1.png"
import i2 from "./assets/img/2.png"
import i3 from "./assets/img/3.png"
import i4 from "./assets/img/4.png"
import i5 from "./assets/img/5.png"
import i6 from "./assets/img/6.png"

import i20 from "./assets/img/20.png"
import i21 from "./assets/img/21.png"
import i22 from "./assets/img/22.png"
import i23 from "./assets/img/23.png"

import i24 from "./assets/img/24.png"
import i25 from "./assets/img/25.png"
import i26 from "./assets/img/26.png"

const cards = [
  { id: 1, type: 1, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: i1, tip:"💡Antes de começar o React domine JavaScript moderno."},

  { id: 2, type: 1, titulo: 'O que é Vite', texto: 'Vite é um automatizador de projetos web focado na velocidade,oferecendo servidor que atualiza intanteniamente,usado por React.', code: i2, tip:"💡Automatizador de projetos focado na VELOCIDADE!"},
  
  { id: 3, type: 1, titulo: 'React+Vite', texto: '1.Crie o Projeto 2.Entre na pasta 3.Intale as bibliotecas(npm install) 4.Inicie o sevidor(npm run dev) 5.Acesse o link mostrado no terminal.', code: i3, tip:"💡Crie componentes pequenos para deixar seu código organizado e fácil de arrumar."},
  
  { id: 4, type: 1, titulo: 'Estrutura de pastas', texto: 'A estrutura de pastas é um ponto importante para o projeto, que deve seguir no mínimo essa organização para funcionar certo, mantendo um padrão organizacional.', code: i4, tip:"💡Siga a estrutua para uma boa organização padrão!"},
  
  { id: 5, type: 1, titulo: 'Main.jsx', texto: 'É o ponto de entrada principal em projeto, a estrutura mais comum e atualizada do main.jsx  foca em três partes: as importações, a seleção do elemento HTML e a renderização.', code: i5, tip:"💡Mantenha o seu main.jsx limpo"},
  
  { id: 6, type: 1, titulo: 'App.jsx', texto: 'É o componente raiz principal em projetos React, servindo como o ponto de entrada central para a interface do usuário.', code: i6, tip:"💡Use o App.jsx apenas para organizar seus componentes principais, evitando lógica complexa nele."},
  
  { id: 7, type: 2, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 8, type: 2, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 9, type: 2, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 10, type: 2, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 11, type: 2, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 12, type: 3, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 13, type: 3, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 14, type: 3, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 15, type: 3, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 16, type: 4, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 17, type: 4, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 18, type: 4, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 19, type: 4, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 20, type: 5, titulo: 'O que é useState', texto: 'Um Hook fundamental do React que permite adicionar o estado mais atual a componentes funcionais', code: i20, tip:"💡 É uma variável que atualiza a tela quando muda."},
  
  { id: 21, type: 5, titulo: 'Atualizar um estado', texto: 'Significa alterar os dados internos de um componente, forçando a renderização novamente', code: i21, tip:"💡 Use sempre o set. Ex: setNome('João')."},
  
  { id: 22, type: 5, titulo: 'State em fomulários', texto: 'Pode ser vista em fomulários como condição atual dos campo,ex:validação de valores e estado de aplicaçãp como, carregando/enviado', code: i22, tip:"💡 Use onChange para capturar o que foi digitado."},
  
  { id: 23, type: 5, titulo: 'Objetos e arrays', texto: 'A imutabilidade é essencial nesses casos, pois em vez de alterar o original, e preciso criar uma copia com as alterações desejadas', code: i23, tip:"💡 Use ... para copiar o que já existe antes de mudar."},
  
  { id: 24, type: 6, titulo: "Renderização Condicional", texto: 'Permite exibir componentes ou elementos apenas quando certas condições são atendidas, utilizando operadores lógicos como && ou ternários.', code: i24, tip:"💡 Use o operador && quando quiser renderizar algo apenas se a condição for verdadeira."},
  
  { id: 25, type: 6, titulo: 'Listas com map( )', texto: 'RO método map() percorre um array de dados e retorna uma lista de elementos JSX, transformando dados brutos em componentes visuais.', code: i25, tip:"💡 O map() sempre retorna um novo array, por isso é ideal para imutabilidade no React."},
  
  { id: 26, type: 6, titulo: 'A propriedade key nas listas', texto: 'As keys ajudam o React a identificar quais itens sofreram alteração, foram adicionados ou removidos, garantindo uma atualização eficiente do DOM.', code: i26, tip:"💡 Evite usar o índice do array como key se a ordem dos itens puder mudar."},
  
  { id: 27, type: 7, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 28, type: 7, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 29, type: 7, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"},
  
  { id: 30, type: 8, titulo: 'O que é react', texto: 'React é uma biblioteca JavaScript de código aberto, focada na criação de interfaces de usuário (UI) interativas e eficientes.', code: helloworld, tip:"💡 Dica sobre React"}
]

function App() {
  return (
    <>
    <div className="container">
      <h1>Cards de Estudo</h1>
      <p className='subtitulo'>Veja os cards a seguir para entender um pouco mais sobre React e Vite</p>
    <div className="grid">
      {cards.map((item) => (
        <Card
          key={item.type}
          id={item.id}
          titulo={item.titulo}
          texto={item.texto}
          tipo={item.type}
          code={item.code && <img src={item.code} alt={item.titulo}></img>}
          dica={item.tip}
        />
      ))}
    </div>
    </div>
    </>
  )
}

export default App
