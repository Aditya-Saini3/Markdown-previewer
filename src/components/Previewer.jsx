import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { marked } from "marked";

function Previewer({rawText}) {
    return (
        <div className="preview-wrap">
             <div className="preview-toolbar">
                <h2 className="preview-toolbar__heading">Preview</h2>
                <FontAwesomeIcon icon={faArrowsAlt} className="maximizer preview-toolbar__maximizer"/>
            </div>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(rawText)}}>
            </div>
        </div>
    )
}

export default Previewer