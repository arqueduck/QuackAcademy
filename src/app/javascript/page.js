import Footer from "@/components/Footer";
import Sidemenu from "@/components/Sidemenu";
import CodeSnippet from "@/components/code/CodeSnippet";

const examples = [
    `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Exemplo de Script</title>
    </head>
    <body>
        <h1>Bem-vindo ao JavaScript</h1>
        <script>
            document.body.style.backgroundColor = "lightblue";
            console.log("O JavaScript foi executado com sucesso!");
        </script>
    </body>
    </html>
    `,
    // Exemplo 1: Declaração de variáveis e uso de console.log
    `
    var saudacao = "Olá, Mundo!";
    console.log(saudacao);
    `,

    // Exemplo 2: Função de soma
    `
    function somar(a, b) {
        return a + b;
    }

    var resultado = somar(3, 4);
    console.log("Resultado da soma:", resultado);
    `,

    // Exemplo 3: Estruturas condicionais
    `
    var numero = 10;

    if (numero > 5) {
        console.log("O número é maior que 5");
    } else {
        console.log("O número é menor ou igual a 5");
    }
    `,

    // Exemplo 4: Laço de repetição for
    `
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    `,

    // Exemplo 5: Manipulação do DOM
    `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Manipulação do DOM</title>
    </head>
    <body>
        <div id="demo">Hello, World!</div>
        <script>
            document.getElementById("demo").innerText = "Olá, Mundo!";
        </script>
    </body>
    </html>
    `
]

const htmlExample = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Usando Arquivo JavaScript Externo</title>
        <script src="script.js"></script>
    </head>
    <body>
        <h1>Bem-vindo ao JavaScript Externo</h1>
    </body>
    </html>
`;

const jsExample = `
    /* script.js */
    document.body.style.backgroundColor = "lightgreen";
    console.log("Arquivo JavaScript externo foi executado com sucesso!");
`;

export default function page(){
    return (
        <div className="flex flex-1 overflow-hidden">
            <Sidemenu>
                <li className="menu-title">JavaScript</li> 
                <li>
                    <a
                    className="whitespace-nowrap overflow-hidden text-ellipsis"
                    href="#title-1">
                        Criando meu primeiro HTML
                    </a>
                </li>
                <li>
                    <a className=""
                    href="#title-2">
                        Estrutura básica do HTML
                    </a>
                </li>
                <li>
                    <a className=""
                    href="#title-3">
                        Elementos e Tags Principais
                    </a>
                </li>
                <li>
                    <a className=""
                    href="#title-4">
                        Atributos Comuns
                    </a>
                </li>
                <li>
                    <a className=""
                    href="#title-5">
                        Formulários
                    </a>
                </li>
            </Sidemenu>

            <div className="p-4 overflow-y-auto">
                <h2 className="text-2xl">
                    JavaScript
                </h2>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mt-6 mb-2" id="title-1">O que é JavaScript?</h2>
                    <p className="mb-4">
                        JavaScript é uma linguagem de programação que permite implementar funcionalidades complexas em páginas web.
                        Com ele, podemos criar desde simples interações até aplicações web completas. 
                        É executado no navegador, o que o torna uma ferramenta essencial para o desenvolvimento web.
                    </p>
                    <p className="mb-4">
                        Nesse artigo, iremos conferir os principais tópicos sobre a linguagem de programação que precisamos conhecer para criar nossos próprios códigos.
                    </p>
                    <p>
                        Recomendamos fortemente que se aprofunde ainda mais em cada um deles buscando em outras referências como por exemplo o <a className="font-bold text-teal-400" href="https://www.w3schools.com/js/default.asp">W3Schools</a> que, além de ter um tutorial passo-a-passo, possui um acervo completo de artigos detalhados sobre cada tópico.<br/>
                        E pratique bastante!
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mt-6 mb-2" id="title-1">Onde escrever o código JavaScript?</h2>

                    <p>
                        Existem duas formas de escrever o código que você irá utilizar na sua página HTML:
                    </p>
                        <li className="pl-4">Diretamente no HTML com a tag <strong>script</strong></li>
                        <li className="pl-4">Ou em um arquivo dedicado.</li>

                    <h3 className="text-lg font-semibold mt-6 mb-2">
                        Com a tag script
                    </h3>
                    <p className="mb-4">
                        A tag <code>&lt;script&gt;</code> é usada para incluir JavaScript dentro de um documento HTML. 
                        O código JavaScript inserido dentro dessa tag é executado pelo navegador quando a página é carregada.
                    </p>
                    <CodeSnippet content={examples[0]} language="html" />
                    <p className="mt-4">
                        No exemplo acima, usamos a tag <code>&lt;script&gt;</code> para alterar a cor de fundo da página para "lightblue" 
                        e para exibir uma mensagem no console do navegador. O JavaScript dentro da tag <code>&lt;script&gt;</code> 
                        é executado assim que o navegador encontra essa tag ao carregar a página.
                    </p>
                    <p className="mb-4">
                        Você pode incluir a tag <code>&lt;script&gt;</code> diretamente no <code>&lt;head&gt;</code> ou no 
                        <code>&lt;body&gt;</code> do seu documento HTML, dependendo de quando você deseja que o JavaScript seja executado.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mt-6 mb-2">Usando Arquivo JavaScript Externo</h2>
                    <p className="mb-4">
                        Além de incluir código JavaScript diretamente no HTML usando a tag <code>&lt;script&gt;</code>, 
                        você também pode criar um arquivo JavaScript separado e vinculá-lo ao seu documento HTML.
                        Isso torna o código mais organizado e facilita a manutenção.
                    </p>

                    <h3 className="text-lg font-semibold mt-4 mb-2">Passo 1: Crie o Arquivo JavaScript</h3>
                    <p className="mb-4">
                        Primeiro, crie um arquivo chamado <code>script.js</code> na mesma pasta que o seu arquivo HTML. 
                        Dentro desse arquivo, escreva o código JavaScript que você deseja executar:
                    </p>
                    <CodeSnippet content={jsExample} language="javascript" />

                    <h3 className="text-lg font-semibold mt-4 mb-2">Passo 2: Vincule o Arquivo JavaScript no HTML</h3>
                    <p className="mb-4">
                        Em seguida, inclua o arquivo JavaScript no seu documento HTML usando a tag <code>&lt;script&gt;</code> 
                        com o atributo <code>src</code> apontando para o caminho do arquivo. Coloque a tag <code>&lt;script&gt;</code> 
                        dentro da seção <code>&lt;head&gt;</code> ou antes do fechamento da tag <code>&lt;/body&gt;</code>.
                    </p>
                    <CodeSnippet content={htmlExample} language="html" />

                    <p className="mt-4">
                        No exemplo acima, o arquivo <code>script.js</code> é carregado e executado quando a página é carregada. 
                        O JavaScript no arquivo altera a cor de fundo da página para "lightgreen" e exibe uma mensagem no console do navegador.
                    </p>
                    <p className="mb-4">
                        Usar arquivos JavaScript externos é uma prática recomendada para manter o código limpo e modular, 
                        facilitando a leitura e a manutenção do seu projeto.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mt-6 mb-2">Variáveis</h2>
                    <p className="mb-4">
                        Variáveis são usadas para armazenar informações que podem ser referenciadas e manipuladas no código.
                        Em JavaScript, podemos declarar variáveis usando <code>var</code>, <code>let</code>, ou <code>const</code>.
                    </p>
                    <CodeSnippet content={examples[1]} language="javascript" />
                    <p className="mt-4">
                        No exemplo acima, criamos uma variável chamada <code>saudacao</code> e atribuímos a ela o valor <code>"Olá, Mundo!"</code>.
                        Em seguida, usamos <code>console.log</code> para exibir o valor da variável no console do navegador.
                    </p>
                </section>


                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mt-6 mb-2">Estruturas Condicionais</h2>
                    <p className="mb-4">
                        Estruturas condicionais são usadas para tomar decisões no código, permitindo a execução de blocos de código diferentes com base em certas condições.
                        A mais comum é a instrução <code>if</code>, que verifica se uma condição é verdadeira e executa um bloco de código, senão, executa outro bloco.
                    </p>
                    <CodeSnippet content={examples[3]} language="javascript" />
                    <p className="mt-4">
                        No exemplo, declaramos uma variável <code>numero</code> com o valor <code>10</code>. 
                        Usamos uma estrutura <code>if</code> para verificar se <code>numero</code> é maior que 5. 
                        Se a condição for verdadeira, exibimos <code>"O número é maior que 5"</code>; caso contrário, exibimos <code>"O número é menor ou igual a 5"</code>.
                    </p>
                </section>

                <section className="mb-6">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mt-6 mb-2">Funções</h2>
                    <p className="mb-4">
                        Funções são blocos de código que realizam uma tarefa específica e podem ser reutilizados ao longo do programa.
                        Elas podem receber parâmetros (informações de entrada) e retornar um valor de saída.
                    </p>
                    <CodeSnippet content={examples[2]} language="javascript" />
                    <p className="mt-4">
                        No exemplo, definimos uma função chamada <code>somar</code> que recebe dois parâmetros, <code>a</code> e <code>b</code>.
                        A função retorna a soma desses dois valores. Chamamos a função com os argumentos <code>3</code> e <code>4</code> e armazenamos o resultado na variável <code>resultado</code>.
                        Por fim, exibimos o resultado no console.
                    </p>
                </section>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">Laços de Repetição</h2>
                    <p className="mb-4">
                        Laços de repetição permitem executar um bloco de código várias vezes. O laço mais comum é o <code>for</code>.
                    </p>
                    <CodeSnippet content={examples[4]} language="javascript" />
                    <p className="mt-4">
                        No exemplo, usamos um laço <code>for</code> para iterar de 0 a 4. A cada iteração, o valor de <code>i</code> é incrementado em 1, 
                        e o valor atual de <code>i</code> é exibido no console.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mt-6 mb-2">Manipulação do DOM</h2>
                    <p className="mb-4">
                        O DOM (Document Object Model) é uma interface que representa o documento HTML em uma estrutura de árvore, 
                        permitindo que JavaScript acesse e manipule o conteúdo e a estrutura da página.
                    </p>
                    <CodeSnippet content={examples[5]} language="html" />
                    <p className="mt-4">
                        No exemplo, usamos <code>document.getElementById</code> para selecionar um elemento HTML pelo seu ID e, 
                        em seguida, alteramos seu conteúdo de texto usando <code>innerText</code>.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusão</h2>
                    <p className="mb-4">
                        Esses são os principais temas iniciais que precisamos aprender para começar a implementar funcionalidade nas nossas páginas web.
                    </p>
                    <p className="mb-4">
                        Reforçamos a importância de se aprofundar ainda mais em cada um dos temas. Você pode encontrar muito material bom, como o <a className="font-bold text-teal-400" href="https://www.w3schools.com/js/default.asp">W3Schools</a> que mencionamos acima, e também em vídeo no YouTube.
                    </p>
                    <p className="mb-4">
                        Mas fica a dica: ao acessar esses conteúdos na internet fique atento a data de publicação para não estudar um conteúdo desatualizado.
                    </p>
                    <p className="mb-4">
                        A tecnologia está em constante mudança e com isso surgem novas atualizações que trazem correções e melhorias.
                    </p>
                    <p className="mb-4 font-bold">
                        Desejamos ótimos estudos!
                    </p>

                </section>
                <Footer/>
            </div>
        </div>
    )
}