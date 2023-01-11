import { useState } from "react";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Editor({rawText, setRawText}) {

    function handleRawText(e) {
        setRawText(e.target.value)
    }

    console.log(rawText)
    return (
        <div className="editor-wrap">
            <div className="editor-toolbar">
                <h2 className="editor-toolbar__heading">Editor</h2>
                <FontAwesomeIcon icon={faArrowsAlt} className="maximizer editor-toolbar__maximizer"/>
            </div>
            <textarea id="editor" value={rawText} onChange={handleRawText}>
            </textarea>
        </div>
    )
}

export default Editor