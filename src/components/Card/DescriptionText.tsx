import Quill, { Delta } from "quill/core"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function DescriptionText({delta, setAction}: {delta: Delta | undefined, setAction: Dispatch<SetStateAction<boolean>>}) {
  const quillRef = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState('')

  useEffect(() => {
    if (quillRef.current) {
      // Initialize Quill editor
      const quill = new Quill(quillRef.current, {
        theme: 'snow',
        readOnly: true, // Set to true to make the editor read-only
        modules: {
          toolbar: false, // Disable the toolbar
        },
      });

      if (delta) {
        // Set the editor contents from the delta object
        quill.setContents(delta);
      }
      const htmlText = quill.getSemanticHTML();
      setHtml(htmlText)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <div onClick={() => setAction(true)}>
    <div ref={quillRef} className="hidden"></div>
    <div dangerouslySetInnerHTML={{__html: html}}></div>
  </div>
  )
}