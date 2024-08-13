import Quill, { Delta } from "quill/core"
import { useEffect, useRef } from "react";

export default function DescriptionText(delta: Delta) {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      // Create a new Quill instance in a hidden div
      quillRef.current = new Quill(editorRef.current);
    }

    if (quillRef.current && delta) {
      // Set the contents of the editor
      quillRef.current.setContents(delta);
    }
  }, [delta]);

  return (
    <div>
      {/* This div will hold the Quill editor's root node */}
      <div ref={editorRef} style={{ display: 'none' }}></div>
      {/* This div will display the converted HTML */}
      <div dangerouslySetInnerHTML={{ __html: editorRef.current?.innerHTML || '' }}></div>
    </div>
  );
}