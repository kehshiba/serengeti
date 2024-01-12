import { Editor } from "@monaco-editor/react";

export default function MonacoEditor() {

    return (
        <>
            <Editor
                height="90vh"
                language={"javascript"}
                defaultValue={"// your code here"}
                theme="vs-dark"
            />
        </>
    );
}