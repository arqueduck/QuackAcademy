import Sidemenu from "@/components/Sidemenu";
import CodeSnippet from "@/components/code/CodeSnippet";
import Image from 'next/image'
import Footer from "@/components/Footer";
import Link from "next/link";

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
    </html>
`

const code1 =`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meu primeiro site</title>
    </head>
    <body>
        <!-- O que é escrito dentro dos sinais de comentário, não aparecem na página HTML -->
        <!-- Geralmente esta tag é usada para comentar e organizar melhor o código -->
        <!-- Assim fica mais fácil para outras pessoas entenderem o que foi programado -->

        <h1>Este é um título grandão</h1>
        <h2>Este é um título menor</h2>
        <h3>E o título diminui</h3>
        <h6>Até H6</h6>

        <p>Este é um parágrafo, usado para ter qualquer coisa escrita.</p>
        <p>Vou adicionar várias linhas de caracteres para ver como fica</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis perspiciatis aut magnam delectus, quae voluptate, ut at nisi nostrum consequuntur aspernatur, natus porro commodi cum vitae dolore ullam necessitatibus iure voluptas quod eos dolores sint esse. Architecto consequuntur, eius labore, iusto, autem alias consequatur deserunt maxime totam dignissimos amet? Quibusdam sapiente impedit voluptatibus iusto rerum blanditiis maxime assumenda, ab quo repudiandae. Incidunt corporis, deserunt officiis adipisci sapiente libero in eius similique eaque distinctio? Ad cupiditate ex consequuntur sapiente quo delectus itaque neque magnam rerum at! Itaque ullam architecto unde aliquid modi, eius sint, voluptatibus optio accusamus doloremque maiores porro rem?</p>

        <a href="https://google.com">Clique aqui e abra o Google</a>
    
        <br>
        <p>Acima e abaixo deste parágrafo tem uma quebra de linha</p>
        <br>

        <div>
            <p>Este texto está dentro de uma DIV</p>
        </div>

        <img src="https://apexensino.com.br/wp-content/uploads/2019/02/iStock-1017296544-1024x683-1024x640.jpg" alt="Homem programando">

        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </body>
    </html>
`

const code2=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meu site</title>
        <style>
                        .vermelho{
                            color: brown;
                        }

                        .verde{
                            color:rgb(18, 133, 18)
                        }
                </style>
    </head>
    <body>
        <p>Escreva seu nome: <input id="camponome"></input></p>

        <div class="vermelho">
            <p>Tudo escrito nessa seção</p>
            <p>Está na cor Azul</p>
        </div>

        <div class="verde">
            <p>Já nesta seção, tudo escrito</p>
            <p>Está na cor Verde</p>
        </div>
    </body>
    </html>
`

const code3=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form>
            <label for="nome">Digite seu nome: <input type="text" name="nome"></label>
            <br>
            <br>
            <label for="sexo">Qual o seu sexo: </label>
            <input type="radio" name="sexo">Masculino
            <input type="radio" name="sexo">Feminino
            <br>
            <br>
            <input type="submit" value="Enviar">
            <input type="reset" value="Redefinir">
            <br>
            <br>
            <button>Clique no botão</button>
        </form>
    </body>
    </html>
`

export default function page(){
    return (
        <div className="flex overflow-hidden">
            <Sidemenu className="">
                <li className="menu-title">HTML</li> 
                
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
                

                <h2 className="text-2xl text-center">
                    HTML (HyperText Markup Language)
                </h2>
                <p>
                    O HTML é a linguagem de marcação padrão para a criação de páginas da web, sua principal função é estruturar o conteúdo da página web, usando vários elementos estruturais que se chamam "tags".
                </p>
                <p>
                    Essas tags são responsáveis por comandar a estrutura da página e identificar alguns elementos chave para o funcionamento do seu site.
                </p>

                <h2 className="text-xl text-center" id="title-1">
                    Criando meu primeiro arquivo HTML
                </h2>
                <p>
                    A criação de um arquivo HTML é muito mais fácil do que você imagina! Para começar crie uma nova pasta na sua área de trabalho, neste exemplo vou criar uma pasta de nome "Meu Site".
                </p>
                <Image
                    src="/images/createFolder.png"
                    width={500}
                    height={500}
                    alt="Criação da Pasta"
                    className="rounded-3xl m-4"
                />
                <p>
                    Depois de ter a pasta criada, dê 2 cliques em cima dela, para entrar na pasta.
                </p>
                <p>
                    Já dentro dela, basta clicar com o botão direito e depois ir até "Novo" e então "Documento de Texto", ou "Text Document", a depender do idioma do seu sistema operacional.
                </p>
                <Image
                    src="/images/createFile.png"
                    width={500}
                    height={500}
                    alt="Criação do Arquivo"
                    className="rounded-3xl m-4"
                />
                <p>
                    Feito isso, nomeie seu arquivo como index (esta é uma nomenclatura padrão para as páginas principais em HTML). Se no seu computador o final do arquivo está como ".txt", basta renomear este arquivo para ".html" e assim, você terá a sua primeira página em HTML <strong>JÁ CRIADA!</strong> Ela está vazia, mas já existe.
                </p>
                <p>
                    Se o ".txt" não aparece ao final do seu arquivo index, não precisa se preocupar pois no próximo passo você consegue trocar este final. Ah! <strong>Muito importante</strong>, a partir de agora vamos chamar o final do arquivo por seu nome correto, que é "<strong>extensão</strong>".
                </p>
                <br></br>
                <p>
                    Agora, você pode clicar com o botão direito em cima do seu arquivo index, ir até a opção "Abrir com" e selecionar a opção "Visual Studio Code".
                </p>
                <Image
                    src="/images/openVSCode.png"
                    width={500}
                    height={500}
                    alt="Abrir Visual Studio Code"
                    className="rounded-3xl m-4"
                />

                <p>
                    Feito isso, algo muito semelhante ao que está abaixo será aberto no seu computador. Basta clicar na primeira opção de "Open Folder", que significa "Abrir pasta". Ah! <strong>Mais uma informação importante.</strong> Em linguagem de programação é usado muito inglês, caso você não tenha conhecimento não tem problema nenhum. Mesmo assim você consegue criar a sua primeira página, mas fica um incentivo para você aprender também o inglês para seguir no mundo de programação.
                </p>
                <Image
                    src="/images/openFolder.png"
                    width={500}
                    height={500}
                    alt="Abrir Arquivo"
                    className="rounded-3xl m-4"
                />
                <p>
                    Com a pasta aberta no Visual Studio Code, caso você não tenha trocado a extensão do arquivo para ".html" ainda, este é o momento ideal para fazer isso. Para tal, basta clicar com o botão direito em cima do seu arquivo index e depois em "Rename" ou em português "Renomear".
                </p>
                <Image
                    src="/images/rename.png"
                    width={500}
                    height={500}
                    alt="Renomear"
                    className="rounded-3xl m-4"
                />
                <p>
                    Basta apagar ".txt" da extensão deste arquivo e escrever ".html". E pronto, você criou sua primeira página de marcação de texto que é o início do seu site.
                </p>

                <h2 className="text-xl text-center" id="title-2">
                    Estrutura básica do HTML
                </h2>
                <p>
                    Como falamos na seção anterior, o HTML tem uma estrutura básica para identificar o tipo de arquivo que estamos criando, ela é obrigatória e precisa ser declarada antes de começarmos a escrever nosso documento HTML. Essa estrutura conta com alguns elementos importantes:
                </p>
                <li>
                    <strong><code>&lt;!DOCTYPE html&gt;</code></strong>: Declaração do tipo de documento, essencial para o HTML5.
                </li>
                <li>
                    <strong><code>&lt;html&gt;</code></strong>: Elemento raiz que envolve todo o conteúdo da página.
                </li>
                <li>
                    <strong><code>&lt;head&gt;</code></strong>: Contém meta-informações sobre o documento (Pra esse exercício, copie o head que vai dar certo).
                </li>
                <li>
                    <strong><code>&lt;title&gt;</code></strong>: Fica dentro do head e define o título da página que aparece na aba do navegador.
                </li>
                <li>
                    <strong><code>&lt;body&gt;</code></strong>: Contém o conteúdo visível da página, como textos, imagens, links, etc.
                </li>

                <p>
                    Sendo assim, a estrutura básica do HTML sempre vai ser algo como abaixo:
                </p>
                
                <div className="flex m-4">
                    <CodeSnippet content={code}/>
                </div>

                <p>
                    <strong>É agora que entra a parte das facilidades que uma IDE pode fornecer para seus usuários.</strong>
                </p>
                <p>
                    No Visual Studio Code, quando você está criando uma nova página de internet, você não precisa digitar toda essa estrutura apresentada acima, ao invés disso, vamos usar um atalho que a IDE nos proporciona.
                </p>
                <p>
                    Para isso basta digitar apenas "!" na parte da direita, que é onde deve estar aberto o seu arquivo index.html, e depois apertar a tecla "Enter" no teclado. Com isso toda essa estrutura inicial será automaticamente criada, como no exemplo abaixo:
                </p>
                <div className="flex flex-row">
                <Image
                    src="/images/write!.png"
                    width={500}
                    height={500}
                    alt="Escrever !"
                    className="rounded-3xl m-4 flex"
                />
                <Image
                    src="/images/html.png"
                    width={500}
                    height={500}
                    alt="HTML"
                    className="rounded-3xl m-4 flex"
                />
                </div>
                <h2 className="text-xl text-center" id="title-3">
                    Elementos e Tags Principais
                </h2>
                <p>
                    Tendo a estrutura criada, vamos partir para conhecer um pouco dos elementos que vão compor o nosso documento HTML. Lembrando que a parte que o usuário consegue enxergar sempre será o que está dentro da tag body.
                </p>
                <li>
                    <strong><code>&lt;!-- COMENTÁRIOS --&gt;</code></strong>: Te permite adicionar comentários no código que não vão aparecer para os usuários e servem somente para a organização do código (Comentar o próprio código é uma boa prática muito bem vista na comunidade, pois torna a compreensão do seu código para outros desenvolvedores muito melhor).
                </li>
                <li>
                    <strong><code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code></strong>: Títulos de diferentes níveis de importância, sendo h1 o "maior" título e h6 o "menor" hierarquicamente.
                </li>
                <li>
                    <strong><code>&lt;p&gt;</code></strong>: Parágrafo de texto. É aqui que vai todo o conteúdo em texto que vai aparecer na página para o usuário.
                </li>
                <li>
                    <strong><code>&lt;br&gt;</code></strong>: É uma quebra de linha, geralmente usado para separar um conteúdo do outro.
                </li>
                <li>
                    <strong><code>&lt;div&gt;</code></strong>: Este é um elemento que vamos usar principalmente para a estilização da página. Mas esta também cria uma "divisão" na página (na parte de CSS as DIVs vão fazer mais sentido, prometo).
                </li>
                <li>
                    <strong><code>&lt;a href="URL"&gt;</code></strong>: É uma tag utilizada para te levar a outro lugar quando clicar em cima do texto destacado. Geralmente usado para levar a um link externo (como um vídeo no youtube explicando algo), ou até mesmo um link interno (Pode te levar a outra página HTML, por exemplo).
                </li>
                <li>
                    <strong><code>&lt;img src="URL" alt="Descrição"&gt;</code></strong>: Essa é a tag que te permite adicionar imagens à sua página web. Funciona tanto com links externos (de outras páginas na internet), como com links internos (uma imagem salva na mesma pasta do seu projeto).
                </li>
                <li>
                    <strong><code>&lt;ol&gt;</code></strong>: Cria uma lista de itens ordenados, ou seja, o primeiro item é enumerado com 1., o segundo com 2., e assim por diante.
                </li>
                <li>
                    <strong><code>&lt;ul&gt;</code></strong>: Cria uma lista de itens que ao contrário da anterior, não vai ser ordenada.
                </li>
                <li>
                    <strong><code>&lt;li&gt;</code></strong>: Cria um item dentro das listas de itens mencionadas acima.
                </li>
                <br></br>
                <p className="text-lg">
                    Abaixo, um exemplo de página usando todas as tags que comentamos acima. Copiar o código vai funcionar, mas para aprender <strong>mesmo</strong>, o ideal é você mesmo escrever cada linha do código.
                </p>

                <div className="flex m-4">
                    <CodeSnippet content={code1}/>
                </div>

                <p>
                    Como resultado do código escrito acima, temos a seguinte página HTML: <a href="/links/exemploHtml.html" target="_blank" className="font-bold text-teal-400">Clique Aqui</a>
                </p>
                
                <h2 className="text-xl text-center" id="title-4">
                    Atributos Comuns
                </h2>
                <p>
                    Os atributos são usados para várias facilidades, uma delas é a aplicação de estilos em um grupo de tags. Os estilos serão o próximo tema que iremos estudar com a parte de <strong>CSS.</strong> Os atributos que mais vamos utilizar e que é importanto você ter em mente são:
                </p>

                <li>
                    <strong><code>&lt;id&gt;</code></strong>: Identificador único para elementos, faz com que um elemento seja único dentro do código, o ID não pode se repetir dentro de um HTML. Esta tag é usada para campos específicos, como um campo onde vamos coletar algum dado do usuário. Assim temos certeza de que o dado será preenchido especificamente no campo com o id especificado. Também pode ser usado para a estilização de uma porção específica do documento HTML.
                </li>
                <li>
                    <strong><code>&lt;class&gt;</code></strong>: Atributo para estilização e seleção de múltiplos elementos, essa é a parte de CSS que comentamos no começo desta seção. Vou dar um gostinho de como usar, mas a explicação mesmo vai estar aninhada na seção de CSS.
                </li>

                <br></br>
                <p className="text-lg">
                    Abaixo, um exemplo de página usando todas as tags que comentamos acima. Houve a adição da tag <strong><code>&lt;style&gt;</code></strong> no <strong><code>&lt;head&gt;</code></strong> do nosso documento, isto é uma forma de declarar o CSS, mas vamos nos aprofundar nesse tema na próxima seção.
                </p>

                <div className="flex m-4">
                    <CodeSnippet content={code2}/>
                </div>
                <p>
                    Como resultado do código escrito acima, temos a seguinte página HTML: <a href="/links/exemploAtrib.html" target="_blank" className="font-bold text-teal-400">Clique Aqui</a>
                </p>
                <p>
                    Perceba que as porções dentro das tags <strong><code>&lt;div&gt;</code></strong> estão todos na mesma cor. Isso acontece pois definimos um estilo lá em cima no CSS para todas as classes do tipo vermelho e verde. Além disso, declaramos lá na div que elas fazem parte das classes vermelho e verde.
                </p>

                <h2 className="text-xl text-center" id="title-5">
                    Formulários
                </h2>
                <p>
                    Servem para o propósito de serem de fato um formulário. Este é usado na maioria das vezes para coletar alguma informação do próprio usuário que está usando o documento HTML.
                </p>

                <li>
                    <strong><code>&lt;form&gt;</code></strong>: É uma caixa que reserva um espaço para adicionar elementos específicos de formulários.
                </li>
                <li>
                    <strong><code>&lt;input&gt;</code></strong>: Campo utilizado para que o usuário digite algo manualmente na página. Existem vários tipos de input vindo do usuário. neste exemplo vamos usar o "text" e o "checkbox".
                </li>
                <li>
                    <strong><code>&lt;label&gt;</code></strong>: É o rótulo do campo de entrada. É ideal usar a tag label por facilitar a acessibilidade em vários aspectos.
                </li>
                <li>
                    <strong><code>&lt;button&gt;</code>, <code>&lt;submit&gt;</code> e <code>&lt;reset&gt;</code></strong>: São botões para envio e redefinição dos dados preenchidos na caixa de formulário.
                </li>
                <br></br>
                <p className="text-lg">
                    Abaixo, um exemplo de página usando todas as tags que comentamos acima. Note que a declaração de algumas tags muda, com a adição da palavra <strong>for</strong> e também <strong>type</strong>, além de <strong>value</strong> e <strong>name</strong>.
                </p>

                <div className="flex m-4">
                    <CodeSnippet content={code3}/>
                </div>
                <p>
                    Como resultado do código escrito acima, temos a seguinte página HTML: <a href="/links/exemploForm.html" target="_blank" className="font-bold text-teal-400">Clique Aqui</a>
                </p>
                <br></br>
                <p>
                    Com o conteúdo abordado nesta primeira parte, você já consegue criar uma página semelhante a esta que você está usando para aprender sobre desenvolvimento web. É possível criar conexões entre páginas usando a tag <strong><code>&lt;a href=""&gt;</code></strong> e apontando para outro documento HTML dentro da mesma pasta. Se desafie a tentar escrever esse código.
                </p>
                <br></br>
                <p>
                    Este é o momento para você se desafiar e começar a montar uma página para exercer todo o conteúdo que você aprendeu neste artigo.
                </p>
                <br></br>
                <p>
                    De forma geral, com o abordado acima você já consegue criar uma página com vários elementos diferentes!
                </p>
                <p>
                    Viu, é bem mais fácil do que você imaginava! Mas não pare por aí não! Existem vários locais que te deixam continuar os seus estudos e aprofundar ainda mais o seu conhecimento em HTML!
                </p>
                <p>
                    Para isso, você pode acessar o <a href="https://www.w3schools.com" target="_blank" className="font-bold text-teal-400">W3 School</a>, que é uma página voltada ao aprendizado de várias linguagens de programação de forma mais aprofundada.
                </p>
                <br></br>
                <p>
                    Caso o HTML tenha feito sentido pra você e você quer se desafiar a criar páginas com mais elementos, é só <a className="font-bold text-teal-400" href="https://www.w3schools.com/html/default.asp">CLICAR AQUI</a>
                </p>

                <h2 className="text-2xl text-center font-bold">
                    Parabéns! Você chegou ao final do seu primeiro passo rumo ao desenvolvimento web!
                </h2>
                <p className="text-xl text-center">
                    Este é o começo de sua jornada como um aspirante a desenvolvedor!
                </p>
                <p className="text-xl text-center">
                    Vamos agora conhecer um novo conceito para você deixar o seu site bonito e organizado.
                </p>
                <br></br>
                <Footer>
                    <Link href="/css" className="btn shrink=[1] btn-primary align-center">
                        Clique aqui e vamos deixar sua página estilosa, com o CSS.
                    </Link>
                </Footer>
            </div>
        </div>
    )
}