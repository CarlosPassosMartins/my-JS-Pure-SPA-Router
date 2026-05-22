# JS Pure SPA Router

Um sistema de roteamento para aplicações de página única (SPA - Single Page Application) desenvolvido inteiramente com JavaScript Puro (Vanilla JS), HTML5 e CSS3. O projeto carrega conteúdos (.html) e estilizações (.css) dinamicamente sob demanda, sem dar nenhum refresh no navegador.

## Funcionalidades
* **Navegação por Hash:** Utiliza o window.location.hash para gerenciar o histórico e as rotas do app (ex: #login, #signup).
* **Injeção Dinâmica de Recursos:** Faz requisições assíncronas (fetch) apenas para os arquivos necessários da rota atual.
* **Estilização Isolada:** Altera o arquivo de CSS dinamicamente no head conforme o usuário navega entre as telas.

## Como Funciona a Estrutura

### O Objeto de Rotas
As chaves do objeto mapeiam os hashes da URL diretamente para seus respectivos arquivos físicos:
```
const ROTAS = {
    '#':        ['./templates/home.html', '../styles/home.css'],
    '#login':   ['./templates/login.html', '../styles/login.css'],
    '#signup':  ['./templates/signup.html', '../styles/signup.css'],
    '#404':     ['./templates/404.html', '../styles/404.css'],
}
```
### Ciclo de Execução
1. main(): Inicializa o app renderizando a rota inicial e adiciona um escutador (addEventListener) para o evento hashchange.
2. atualizaPagina(): Captura os dados da rota e gerencia o DOM do container principal (#app) e do stylesheet (#appStyle).
3. chamarFront(): Valida o hash atual da URL (aplicando fallback para "#" se estiver vazio), faz o fetch assíncrono dos arquivos e trata possíveis erros de rede.

## Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar e evoluir o código!
