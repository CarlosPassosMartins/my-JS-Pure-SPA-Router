const ROTAS = {
    '#':       ['./templates/home.html', '../styles/home.css'],
    '#login':  ['./templates/login.html', '../styles/login.css'],
    '#signup': ['./templates/signup.html', '../styles/signup.css'],
    '#404':    ['./templates/404.html', '../styles/404.css'],
}

async function chamarFront() { 
    const rotaAtual = window.location.hash || "#";
    const arquivos = ROTAS[rotaAtual] || ROTAS['#404']
    const codigos = {}
    const [html, css] = arquivos

    if (html){
        const res = await fetch(html)
        if (!res.ok){
            console.log('erro html não encontrado')
            return undefined
        }

        const codigoHtml = await res.text()
        codigos.html = codigoHtml
    }
    
    codigos.css = css

    return codigos
}

async function atualizaPagina() {
    const app      = document.getElementById('app')
    const appStyle = document.getElementById('appStyle')
    const headHtml = document.querySelector('head')
    const res      = await chamarFront()

    if (!res){
        app.textContent = 'sua pagina não foi encontrada, tente novamente mais tarde';
        appStyle.href = "about:blank";
        return
    }

    if (res.html){
        app.innerHTML = res.html
    }

    if (res.css){
        appStyle.href = res.css
    }else{
        appStyle.href = "about:blank"
    }
}

async function main() {
    atualizaPagina()
    window.addEventListener("hashchange", atualizaPagina);
}

main()