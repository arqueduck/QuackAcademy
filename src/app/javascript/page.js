import CodeSnippet from "@/components/code/CodeSnippet";

const code2 = `
var teste = "Alooou"

console.log(teste)
`

export default function page(){
    return (
        <div className="p-4">
            <h2 className="text-2xl">
                JavaScript
            </h2>
            <p>
                O JavaScript é responsável por dar funcionalidade para a página.
            </p>
            
            <CodeSnippet content={code2} language="js" />
        </div>
    )
}