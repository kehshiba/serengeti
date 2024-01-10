import { Editor } from "@monaco-editor/react";
export default function MonacoEditor() {
    return (
        <>
            <Editor
                height="100vh"
                language={"cpp"}
                defaultValue={"// your code here"}
                theme="vs-dark"
            />
        </>
    );
}