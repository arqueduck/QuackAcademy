import CodeSnippet from "@/components/code/CodeSnippet";

const code = `
<body>
    <h1> 
        Hello world!
    </h1>
    <div>
        This is my first page.  
    </div>
</body>
`

const code2 = `
var teste = "Alooou"

console.log(teste)
`



export default function page(){
    return (
        <div className="p-4">
            <h2 className="text-2xl">
                HTML (HyperText Markup Language)
            </h2>
            <p>
                O HTML é a estrutura e conteúdo da página...
            </p>

            <CodeSnippet content={code} />
            <CodeSnippet content={code2} language="js" />
        </div>
    )
}