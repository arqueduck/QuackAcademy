import Sidemenu from "@/components/Sidemenu";
import CodeSnippet from "@/components/code/CodeSnippet";
import Image from 'next/image'

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
                    Ferramentas para um desenvolvimento saudável
                </h2>
                <p>
                    O HTML é a estrutura e conteúdo de uma página web. Mas antes de falarmos sobre os principais pontos desse tema, vamos primeiro comentar sobre as ferramentas usadas para que o desenvolvimento de uma página web seja facilitada em vários aspectos. Para isso, vamos usar um <strong>IDE</strong>.
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

                <h2 className="text-2xl text-center">
                    HTML (HyperText Markup Language)
                </h2>
                <p>
                    O HTML é a linguagem de marcação padrão para a criação de páginas da web, sua principal função é estruturar o conteúdo da página web, usando vários elementos estruturais que se chamam "tags"
                </p>
                <p>
                    Essas tags são responsáveis por comandar a estrutura da página e identificar alguns elementos chave do seu site
                </p>

                <h2 className="text-xl text-center" id="title-1">
                    Criando meu primeiro arquivo HTML
                </h2>
                <p>
                    A criação de um arquivo HTML é muito mais fácil do que você imagina! Para começar crie uma nova pasta na sua área de trabalho, neste exemplo vou criar uma pasta de nome "Meu Site"
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
                    Já dentro dela, basta clicar com o botão direito e depois ir até "Novo" e então "Documento de Texto", ou "Text Document", a depender do idioma do seu sistema operacional
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
                    Agora, você pode clicar com o botão direito em cima do seu arquivo index, ir até a opção "Abrir com" e selecionar a opção "Visual Studio Code"
                </p>
                <Image
                    src="/images/openVSCode.png"
                    width={500}
                    height={500}
                    alt="Abrir Visual Studio Code"
                    className="rounded-3xl m-4"
                />

                <p>
                    Feito isso, algo muito semelhante ao que está abaixo será aberto no seu computador. Basta clicar na primeira opção de "Open Folder", que significa "Abrir pasta". Ah! <strong>Mais uma informação importante.</strong> Em lingagem de programação é usado muito inglês, caso você não tenha conhecimento, não tem problema nenhum! Mesmo assim você consegue criar a sua primeira página, mas fica um incentivo para você aprender também o inglês para seguir no mundo de programação.
                </p>
                <Image
                    src="/images/openFolder.png"
                    width={500}
                    height={500}
                    alt="Abrir Arquivo"
                    className="rounded-3xl m-4"
                />
                <p>
                    Com a pasta aberta no Visual Studio Code, caso você não tenha trocado a extensão do arquivo para ".html" ainda, este é o momento ideal para fazer isso. Para tal, basta clicar com o botão direito em cima do seu arquivo index e depois em "Rename" ou em português "Renomear"
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
                    Como comentado um pouco acima desta parte, o HTML tem uma estrutura básica para identificar o tipo de arquivo que estamos criando. Essa estrutura conta com alguns elementos importantes:
                </p>
                <li><strong>!DOCTYPE html</strong>: Declaração do tipo de documento, essencial para o HTML5.</li>
                <li><strong>html</strong>: Elemento raiz que envolve todo o conteúdo da página.</li>
                <li><strong>head</strong>: Contém meta-informações sobre o documento (Pra esse exercício, copie o head que vai dar certo).</li>
                <li><strong>title</strong>: Fica dentro do head e define o título da página que aparece na aba do navegador.</li>
                <li><strong>body</strong>: Contém o conteúdo visível da página, como textos, imagens, links, etc.</li>

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
                    No Visual Studio Code, quando você está criando uma nova página de internet, você não precisa digitar toda essa estrutura apresentada acima, ao invés disso, vamos usar um atalho que o IDE nos proporciona!
                </p>
                <p>
                    Para isso basta digitar apenas "!" na parte da direita, que é onde deve estar aberto o seu arquivo index.html, e depois apertar a tecla "Enter" no teclado. Com isso toda essa estrutura inicial será automaticamente criada, como no exemplo abaixo.
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
                    Tendo a estrutura criada, vamos partir para conhecer um pouco dos elementos que vão compor a nossa página HTML. Lembrando que a parte que o usuário consegue enxergar sempre será o que está dentro da tag body
                </p>
                <li><strong>!-- COMENTÁRIOS --</strong>: Te permite adicionar comentários no código que não vão aparecer para os usuários e servem somente para a organização do código (Comentar o próprio código é uma boa prática muito bem vista na comunidade, pois torna a compreensão do seu código para outros desenvolvedores muito melhor).</li>
                <li><strong>h1 a h6</strong>: Títulos de diferentes níveis de importância, sendo h1 o "maior" título e h6 o "menor" hierarquicamente.</li>
                <li><strong>p</strong>: Parágrafo de texto. É aqui que vai todo o conteúdo em texto que vai aparecer na página para o usuário</li>
                <li><strong>a href="URL"</strong>: É uma tag utilizada para te levar a outro lugar quando clicar em cima do texto destacado. Geralmente usado para levar a um link externo (como um vídeo no youtube explicando algo), ou até mesmo um link interno (Pode te levar a outra página HTML, por exemplo). </li>
                <li><strong>img src="URL" alt="Descrição"</strong>: Essa é a tag que te permite adicionar imagens à sua página web. Funciona tanto com links externos (de outras páginas na internet), como com links internos (uma imagem salva em uma pasta do seu projeto)</li>
                <li><strong>ol</strong>: Cria uma lista de itens ordenados, ou seja, o primeiro item é enumerado 1., o segundo 2., e assim por diante.</li>
                <li><strong>ul</strong>: Cria uma lista de itens que ao contrário da anterior, não vai ser ordenada</li>
                <li><strong>li</strong>: Cria um item dentro das listas de itens mencionadas acima</li>
                <h1 className="text-5xl">COLOCAR EXEMPLO DE CÓDIGO PARA CADA ITEM</h1>

                <h2 className="text-xl text-center" id="title-4">
                    Atributos Comuns
                </h2>
                <p>
                    Os atributos são usados para várias facilidades, uma delas é a aplicação de estilos em um grupo de tags. Os estilos serão o próximo tema que iremos estudar com a parte de <strong>CSS</strong>
                </p>

                <li><strong>id</strong>: Identificador único para elementos, faz com que um elemento seja único dentro do código, o ID não pode se repetir dentro de um HTML</li>
                <li><strong>class</strong>: Classe para estilização e seleção de múltiplos elementos, essa é a parte de CSS que comentamos no começo desta seção.</li>

                <h1 className="text-5xl">COLOCAR EXEMPLO DE CÓDIGO PARA CADA ITEM</h1>

                <h2 className="text-xl text-center" id="title-5">
                    Formulários
                </h2>
                <p>
                    Servem para o propósito de serem de fato um formulário haha. Este é usado na maioria das vezes para coletar alguma entrada do próprio usuário na página de HTML
                </p>

                <li><strong>form</strong>: É uma caixa que reserva um espaço para adicionar elementos específicos de formulário</li>
                <li><strong>input</strong>: Campo utilizado para que o usuário digite algo manualmente na página.</li>
                <li><strong>label</strong>: É o rótulo do campo de entrada.</li>
                <li><strong>button, submit e reset</strong>: São botões para envio e redefinição dos dados preenchidos na caixa de formulário.</li>
                <br></br>
                <p>
                    Com o conteúdo abordado nesta primeira parte, você já consegue criar uma página como esta aqui: <a className="font-bold text-teal-400" href="">COLOCAR UMA PÁGINA DE EXEMPLO</a>
                </p>
                <br></br>
                <p>
                    De forma geral, com o abordado acima você já consegue criar uma página com vários elementos diferentes!
                </p>
                <p>
                    Viu, é bem mais fácil do que você imaginava! Mas não pare por aí não! Existem vários locais que te deixam continuar os seus estudos e aprofundar ainda mais o seu conhecimento em HTML!
                </p>
                <p>
                    Para isso, você pode acessar o W3 School, que é uma página voltada ao aprendizado de várias linguagens de programação de forma mais aprofundada.
                </p>
                <br></br>
                <p>Caso o HTML tenha feito sentido pra você e você quer se desafiar a criar páginas com mais elementos, é só <a className="font-bold text-teal-400" href="https://www.w3schools.com/html/default.asp">CLICAR AQUI</a></p>
            </div>
        </div>
    )
}