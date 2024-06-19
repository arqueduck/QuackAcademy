import CodeSnippet from "@/components/code/CodeSnippet";

const code = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha página</title>
</head>
<body>
    
</body>
</html>`

export default function Introduction(){
    return (
        <div className="p-4 flex flex-col overflow-y-auto">
            <p className="
            mt-4
            text-2xl text-center font-bold
            ">
                Seja bem-vindo aos seus primeiros passos no desenvolvimento web!
            </p>
            <section className="bp-6 my-4">
                <p className="text-justify pb-2">
                    Aqui, vamos explorar o mundo do desenvolvimento web, uma área empolgante e cheia de oportunidades.
                </p>
                
                <h2 className="text-2xl m-4 text-center">
                    O que é Desenvolvimento Web?
                </h2>
                <p className="text-justify pb-2">
                    Desenvolvimento web é o processo de criação e manutenção de sites e aplicações na internet. Isso inclui tudo, desde a simples criação de páginas estáticas até o desenvolvimento de aplicações web complexas que interagem com bancos de dados e oferecem funcionalidades dinâmicas.
                </p>
                <p className="text-justify pb-2">
                    Os sites que visitamos diariamente – como redes sociais, lojas online, blogs e portais de notícias – são produtos do desenvolvimento web. Este campo pode ser dividido em duas principais áreas: o front-end e o back-end.
                </p>
                <ul className="list-disc pl-6">
                    <li><strong>Front-End</strong>: Refere-se à parte do site que os usuários veem e interagem diretamente. Tudo o que você vê em um site – cores, fontes, layouts, e botões – é criado com tecnologias de front-end.</li>
                    <li><strong>Back-End</strong>: Envolve o servidor, banco de dados e lógica de aplicação. É a parte que os usuários não veem, mas que faz tudo funcionar corretamente.</li>
                </ul>
                
                <h2 className="text-2xl m-4 text-center">
                    Como Funciona o Desenvolvimento Web?
                </h2>
                <p className="text-justify pb-2">
                    Quando você acessa um site, seu navegador (como o Chrome, Firefox ou Safari) solicita informações a um servidor. O servidor, então, envia de volta os arquivos necessários para exibir o site no seu navegador. Esses arquivos incluem HTML, CSS e JavaScript, que são as três principais tecnologias do desenvolvimento web front-end.
                </p>
                <ul className="list-disc pl-6">
                    <li><strong>HTML (HyperText Markup Language)</strong>: É a linguagem padrão usada para criar a estrutura de uma página web. Pense no HTML como o esqueleto de uma página, definindo títulos, parágrafos, links e outros elementos.</li>
                    <li><strong>CSS (Cascading Style Sheets)</strong>: É usado para estilizar o HTML, adicionando cores, fontes, espaçamentos, layouts e mais. O CSS transforma o esqueleto em algo visualmente atraente e organizado.</li>
                    <li><strong>JavaScript</strong>: É uma linguagem de programação que adiciona interatividade às páginas web. Com JavaScript, você pode criar elementos dinâmicos, como sliders de imagens, formulários interativos e jogos online.</li>
                </ul>
                
                <h2 className="text-2xl m-4 text-center">
                    Por que Estudar HTML, CSS e JavaScript Primeiro?
                </h2>
                <ul className="list-disc pl-6">
                    <li><strong>Fundação Essencial</strong>: HTML, CSS e JavaScript são as pedras angulares do desenvolvimento web. Dominar esses três permite que você compreenda como os sites são estruturados, estilizados e como funcionam de forma interativa.</li>
                    <li><strong>Curva de Aprendizado Suave</strong>: Comparado a outras linguagens de programação, HTML e CSS são relativamente fáceis de aprender. Eles fornecem uma base sólida antes de mergulhar em JavaScript, que é mais complexo.</li>
                    <li><strong>Imediatismo dos Resultados</strong>: Com HTML e CSS, você pode ver os resultados do seu trabalho instantaneamente no navegador. Isso torna o aprendizado mais recompensador e motivador.</li>
                    <li><strong>Ampliação de Habilidades</strong>: Conhecer bem HTML, CSS e JavaScript abre portas para aprender frameworks e bibliotecas populares, como React, Angular, e Vue.js, além de tecnologias back-end, como Node.js.</li>
                    <li><strong>Relevância no Mercado</strong>: Ter um bom domínio dessas tecnologias é altamente valorizado no mercado de trabalho. Muitos empregos em tecnologia exigem conhecimentos sólidos em HTML, CSS e JavaScript.</li>
                </ul>
                
                <h2 className="text-2xl m-4 text-center">
                    Conclusão
                </h2>
                <p className="text-justify pb-2">
                    Estudar desenvolvimento web pode parecer um desafio, mas com dedicação e prática, você será capaz de criar sites incríveis e funcionais. HTML, CSS e JavaScript são os primeiros passos nesse caminho e, com o tempo, você poderá expandir seu conhecimento para outras áreas mais avançadas. Estamos aqui para ajudá-lo em cada etapa desse processo de aprendizado. Vamos começar essa jornada juntos!
                </p>
                <br></br>
                <p className="text-xl">Antes de partirmos para os estudos, preciso comentar sobre as ferramentas que você deve utilizar para ser um desenvolvedor de sucesso!</p>

                <h2 className="text-2xl text-center">
                    Ferramentas para um desenvolvimento saudável
                </h2>
                <p>
                    Desenvolver aplicações ou escrever páginas web pode ser um desafio por conta da repetição de código que precisamos fazer, por isso usamos algumas ferramentas para que o desenvolvimento de uma página web seja facilitada em vários aspectos. Para isso, vamos usar um <strong>IDE</strong>.
                </p>

                <h2 className="text-2xl text-center">
                    O que é IDE?
                </h2>

                <p>
                    IDE significa Integrated Development Environment, ou Ambiente de Desenvolvimento Integrado. Trata-se de um software que fornece um conjunto de ferramentas abrangentes para facilitar o desenvolvimento de software. Um IDE geralmente inclui um editor de código, ferramentas de depuração, um compilador ou interpretador, e outras funcionalidades integradas que ajudam a escrever, testar e depurar código de maneira mais eficiente. A parte importante aqui é que uma IDE facilita e muito a vida de qualquer desenvolvedor usando qualquer linguagem de programação
                </p>
                <p>
                    Apenas para dar um exemplo rápido sobre as facilidades da IDE, o código abaixo é a estrutura base para qualquer página web e deve ser escrito sempre na criação de uma página
                </p>
                <div className="flex m-4">
                    <CodeSnippet content={code} />
                </div>
                <p>
                    Não se atenha ao que está escrito, o importante é que isso é algo fundamental em um documento HTML.
                </p>
                <p>
                    A IDE nos fornece uma grande facilidade nessa parte que é escrever toda essa estrutura automaticamente apertando algumas poucas teclas. Vamos aprender a fazer isso juntos no decorrer deste passo-a-passo
                </p>
                <p>
                    Para o desenvolvimento de sua primeira página web, a dica é usar o Visual Studio Code, que é um dos IDEs mais populares na comunidade de desenvolvimento em geral, com suporte extensivo para HTML, CSS, JavaScript e muitras outras lingagens.
                </p>
                <li>
                    Para instalar o Visual Studio Code, é só assistir a este vídeo: <a className="font-bold text-teal-400" href="https://www.youtube.com/watch?v=49K-Zxc8A7A">"Como baixar e instalar o VSCODE"</a>
                </li>
                <br></br>
                <p>Agora que já temos o que precisamos para começar a escrever uma página, vamos conhecer o esqueleto de uma página web, o HTML.</p>

            </section>
        </div>
    )
}