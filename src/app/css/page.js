import CodeSnippet from "@/components/code/CodeSnippet"
import Sidemenu from "@/components/Sidemenu"
import Footer from "@/components/Footer"
import Link from "next/link"

const code=`
seletor {
    propriedade: valor;
}
`

const code1=`
p {
    propriedade: valor;
}
`

const code2=`
h2 {
    propriedade: valor;
}
`

const code3=`
body {
    propriedade: valor;
}
`

const code4=`
form {
    propriedade: valor;
}
`

const code5=`
    body {
        background-color: bisque;
        font-family: 'Courier New', Courier, monospace;
    }

    h1 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    h2{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    p {
        margin-left: 5%;
    }

    img:hover {
        transform: scale(1.02);
    }

    div.estilo {
        background-color: aqua;
    }
`

const codeCss=`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Exemplo de CSS</title>
        <style>
                        body {
                            background-color: bisque;
                        }
                </style>
    </head>
    <body>
        <h1>Bem-vindo ao CSS</h1>
    </body>
    </html>
`

const codeFileCss=`
/* style.css */
body {
    background-color: bisque;
    font-family: 'Courier New', Courier, monospace;
}
`

const codeExtCss=`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Exemplo de CSS</title>
            <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Bem-vindo ao CSS</h1>
    </body>
    </html>
`


export default function page(){
    return (
        <div className="overflow-hidden flex">
            <Sidemenu className="">
                <li className="menu-title">CSS</li> 
                
                <li>
                    <a className="whitespace-nowrap overflow-hidden text-ellipsis" href="#title-1">
                        Onde escrever o código CSS?
                    </a>
                </li>
                <li>
                    <a className="whitespace-nowrap overflow-hidden text-ellipsis"
                    href="#title-2">
                        Tipos e Seletores
                    </a>
                </li>
                <li>
                    <a className="whitespace-nowrap overflow-hidden text-ellipsis"
                    href="#title-3">
                        Como é a sintaxe do CSS?
                    </a>
                </li>
                <li>
                    <a className="whitespace-nowrap overflow-hidden text-ellipsis"
                    href="#title-4">
                        Propriedades e valores
                    </a>
                </li>
                <li>
                    <a className=""
                    href="#title-5">
                        Exemplos, pra sua imaginação voar
                    </a>
                </li>
            </Sidemenu>
            <div className="p-4 overflow-y-auto">
                <h2 className="text-2xl text-center">
                    CSS (Cascading Style Sheet)
                </h2>
                <p>
                    CSS é a linguagem que usamos para descrever a apresentação dos documentos HTML. É com o CSS que podemos controlar todo o layout, cor, fonte e vários outros aspectos visuais de documentos HTML. A aplicação de estilo em diferentes elementos do HTML é realizada a partir de "seletores".
                </p>
                <p>
                    Os seletores é que são responsáveis por apontar para qual elemento dentro do HTML que os estilos serão aplicados. Mas, existem alguns tipos de seletores, então vamos dar uma olhadinha nas possibilidades.
                </p>

                <h2 className="text-2xl text-center" id="title-1">
                    Onde escrever o código CSS?
                </h2>
                <p>
                    Pode ser escrito em 2 lugares diferentes para que o HTML o leia:
                </p>
                <li>
                    Dentro do arquivo HTML, com a tag <strong><code>&lt;style&gt;</code></strong> dentro da porção <code>&lt;head&gt;</code>, como realizamos na seção de HTML para exemplificar os atributos comuns.
                </li>
                <li>
                    Ou em um arquivo dedicado a isso.
                </li>

                <h3 className="text-lg font-semibold mt-6 mb-2">
                    Com a tag <code>&lt;style&gt;</code>
                </h3>
                <p>
                    A tag <code>&lt;style&gt;</code> é usada para incluir estilos diretamente dentro do HTML. Este código é lido antes da página carregar, assim os estilos são aplicados antes do conteúdo aparecer na tela.
                </p>

                <div className="flex m-4">
                    <CodeSnippet content={codeCss}/>
                </div>
                <p>
                    No exemplo acima, o CSS está alterando a cor de fundo de toda a página para a cor "bisque". Lembrando que é importante colocar a tag <code>&lt;style&gt;</code> dentro da tag <code>&lt;head&gt;</code> do HTML.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">
                    Usando Arquivo CSS Externo
                </h3>

                <h3 className="text-lg font-semibold mt-4 mb-2">Passo 1: Crie o Arquivo CSS</h3>
                <p>
                    Primeiro, crie um arquivo chamado style.css na mesma pasta que o seu arquivo HTML. Dentro desse arquivo, escreva o código CSS que você deseja executar:
                </p>

                <div className="flex m-4">
                    <CodeSnippet content={codeFileCss} language="css"/>
                </div>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                    Passo 2: Vincule o Arquivo CSS no HTML
                </h3>
                <p>
                    Então, adicione o seu arquivo CSS no documento HTML, usando a tag <code>&lt;link&gt;</code>, com os atributos rel e href, que indicam respectivamente qual é a relação do arquivo que está sendo linkado ao documento HTML, e qual o caminho do arquivo que você quer que seja lido como o CSS da página.
                </p>

                <div className="flex m-4">
                    <CodeSnippet content={codeExtCss}/>
                </div>
                <p>
                    No exemplo acima, o arquivo style.css vai aplicar as alterações no documento HTML, neste exemplo, vai alterar  a cor do fundo da página para "bisque" e alterar também a fonte utilizada em todo o documento.
                </p>
                <br></br>
                <p>
                    Bom, agora que você já sabe que pode seguir de duas formas diferentes, vamos entender como você deve escrever o código em CSS para que sua página tenha suas propriedades visuais alteradas do jeito que você quiser.
                </p>

                <h2 className="text-2xl text-center" id="title-2">
                    Tipos de Seletores
                </h2>
                <li>
                    <strong>Seletores de Tag ou Tipo</strong>: É possível aplicar um estilo a todos os elementos do HTML que fazem parte da mesma tag. Podemos escolher o <strong>body</strong> e aplicar um estilo a todo o corpo da página html por exemplo. Ou mesmo escolher a tag <strong><code>&lt;p&gt;</code></strong> e pedir para que todos os elementos do tipo parágrafo tenham um estilo específico.
                </li>
                <li>
                    <strong>Seletores de Classe</strong>: Lembra dos atributos comuns que conversamos na parte de HTML e que eu comentei que faria mais sentido aqui no CSS? Um desses atributos é a <strong>classe</strong> de uma tag. Podemos definir manualmente uma classe a uma tag e depois aplicar estilização nesta classe em específico. Assim, sempre que precisarmos reutilizar o estilo, podemos apenas declarar a classe no elemento que estamos criando.
                </li>
                <li>
                    <strong>Seletores de ID</strong>: O outro atributo que podemos utilizar para declarar estilização é o ID de uma tag.
                </li>
                <h2 className="text-2xl text-center" id="title-3">
                    Como é a sintaxe do CSS?
                </h2>
                <p>
                    Sintaxe é como chamamos a "forma padrão" de escrita para declarar corretamente um elemento em alguma linguagem de programação. No caso do CSS a sintaxe básica sempre vai seguir o esquema abaixo:
                </p>
                <div className="flex m-4">
                    <CodeSnippet content={code} language="css"/>
                </div>
                <p>
                    Já conhecemos os seletores, então vamos usar alguns deles de exemplo apenas para fixar esta parte do conhecimento.
                </p>
                <div className="flex flex-wrap">
                    <div className="flex-1 m-4">
                        <CodeSnippet content={code1} language="css"/>
                    </div>
                    <div className="flex-1 m-4">
                        <CodeSnippet content={code2} language="css"/>
                    </div>
                    <div className="flex-1 m-4">
                        <CodeSnippet content={code3} language="css"/>
                    </div>
                    <div className="flex-1 m-4">
                        <CodeSnippet content={code4} language="css"/>
                    </div>
                </div>
                <p>
                    Nos códigos acima selecionamos, respectivamente:
                </p>
                <div>
                    <li>
                        <strong>seletor p:</strong> Assim modificando as características visuais de todos os parágrafos do HTML.
                    </li>
                    <li>
                        <strong>seletor h2:</strong> Agora os títulos de tamanho h2 vão seguir a estilização escrita nesta porção.
                    </li>
                    <li>
                        <strong>seletor body:</strong> Todos os itens que são visíveis para o usuário vão seguir o que estiver especificado aqui.
                    </li>
                    <li>
                        <strong>seletor form:</strong> Os formulários terão todos a mesma formatação que existir neste campo.
                    </li>
                </div>
                <p>
                    É importante ressaltar que podemos declarar várias propriedades para um mesmo seletor, desde que esteja dentro dos colchetes.
                </p>
                <br></br>
                <p>
                    Mas o que vai ser modificado? Qual é a propriedade que vamos mudar e como conseguimos preencher o restante dos campos para ter uma página bonita? É o que vamo estudar na próxima porção.
                </p>

                <h2 className="text-2xl text-center" id="title-4">
                    Propriedades e valores
                </h2>
                <p>
                    Nesta porção, vamos ver alguns exemplos que podemos usar para deixar o nosso site mais bonito para você compreender como podemos estruturar o conteúdo de nossa página de estilos.
                </p>
                <div className="flex flex-wrap overflow-hidden">
                    <div className="flex-1 m-2 ml-0 max-w-full">
                            <CodeSnippet
                                content={code5}
                                language="css"
                                className="overflow-auto"
                            />
                    </div>
                    <div className="flex-1 lg:min-w-96 m-4">
                        <p>
                            Nesse exemplo, usamos os seguintes seletores:
                            </p>
                        <br></br>
                        <li>
                            <strong>body:</strong> No body, pedimos para que o plano de fundo seja todo na cor bisque, pedimos também para que a fonte seja uma específica. Assim todos os elementos do body vão seguir esta regra.
                        </li>
                        <li>
                            <strong>h1:</strong> Trocamos a fonte de todos os títulos de tamanho h1 para terem uma fonte específica.
                        </li>
                        <li>
                            <strong>h2:</strong> Também trocamos a fonte dos títulos h2, para que tenha diferença entre o h1 e h2.
                        </li>
                        <li>
                            <strong>p:</strong> Todos os elementos com a tag p ter uma margem à esquerda de 5% do tamanho da página.
                        </li>
                        <li>
                            <strong>img:</strong> Na tag img, usamos algo diferente, que se chama pseudo-classe. A pseudo-classe define um estado especial do elemento antes do símbolo :. No exemplo usamos a pseudo-classe <strong>hover</strong>, que é o estado de "mouse em cima" da tag img. Neste caso, aumentamos o tamanho da imagem em 2% quando passamos o mouse em cima da imagem.
                        </li>
                        <li>
                            <strong>div:</strong> Neste elemento, estamos mudando somente as divs da classe "estilo". As divs que tiverem o atributo <strong><code>&lt;class="estilo"&gt;</code></strong> vão seguir esta porção do código que altera a cor de fundo para "aqua". No CSS quando vamos especificar a classe, colocamos um ponto "." antes do nome desta classe.
                        </li>
                    </div>
                </div>
                <p>
                    Como resultado do código acima, conseguimos transformar uma página como <a href="/links/exemploHtml.html" target="_blank" className="font-bold text-teal-400">esta</a>, em uma página como <a href="/links/exemploCss.html" target="_blank" className="font-bold text-teal-400">esta</a>.
                </p>
                <p>
                    Um página mais estilizada, exige mais seletores, ainda mais propriedades e também valores. Por isso é importante treinar bastante essa parte de CSS para deixar a sua criatividade falar por você.
                </p>
                <br></br>
                <h2 className="text-2xl text-center" id="title-5">
                    Exemplos, pra sua imaginação voar
                </h2>
                <p>
                    Como exemplo de página, toda construída somente com HTML e CSS, deixo aqui este <a href="https://arqueduck.github.io/felipesitefaculdade/" target="_blank" className="font-bold text-teal-400">exemplo</a> e também este <a href="https://gustavo-aal.github.io/gustavo-marques-aal/" target="_blank" className="font-bold text-teal-400">exemplo</a>. Ambos os portfolios foram criados usando somente HTML e CSS, sem mais nada além disso. Espero que com estes exemplos você consiga entender o poder de uma estilização bem feita e se desafiar a criar algo semelhante a estas páginas.
                </p>
                <br></br>
                <p>
                    Lembrando que aprofundar o seu conhecimento neste tema é de extrema importância, por isso, depois de conhecer estes conceitos fundamentais e conseguir montar o seu primeiro documento HTML estilizado com CSS, dê uma olhadinha no <a href="https://www.w3schools.com/css/default.asp" target="_blank" className="font-bold text-teal-400">W3Schools</a>, tenho certeza que o céu é o limite pra você!
                </p>
                <h2 className="text-2xl text-center font-bold">
                    Parabéns, você conseguiu de novo!
                </h2>
                <p className="text-xl text-center">
                    Finalizou mais uma etapa na sua jornada para se tornar um desenvolvedor! Sua dedicação é admirável.
                </p>
                <p className="text-xl text-center">
                    Por último, mas não menos importante, vamos conhecer o que pode fazer mágica no seu documento HTML.
                </p>
                <div className="flex justify-center my-4">
                    <Link href="/javascript" className="btn shrink-[1] btn-primary align-center">
                        Clique aqui e vamos decolar, com o JavaScript.
                    </Link>
                </div>
                <Footer/>
            </div>
        </div>
    )
}