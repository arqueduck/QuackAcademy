
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"

const highlight = (code, language) => {
    return Prism.highlight(code, Prism.languages[language], language )
}

export default function CodeSnippet({content, language = "markup"}){
    const highlightedCode = highlight(content, language)

    return (
        <div className="mockup-code p-4 my-2">
            <pre>
                <code 
                dangerouslySetInnerHTML={{
                    __html: highlightedCode
                }}>
                    
                </code>
            </pre>
        </div>
    )
}