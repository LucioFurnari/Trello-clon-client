import Quill, { Delta } from "quill/core";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export default function DescriptionText({
  delta,
  setAction,
}: {
  delta: Delta | undefined;
  setAction: Dispatch<SetStateAction<boolean>>;
}) {
  const quillRef = useRef<HTMLDivElement>(null);
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (quillRef.current) {
      // Initialize Quill editor
      const quill = new Quill(quillRef.current, {
        theme: "snow",
        readOnly: true, // Set to true to make the editor read-only
        modules: {
          toolbar: false, // Disable the toolbar
        },
      });

      if (delta) {
        // Set the editor contents from the delta object
        quill.setContents(delta);
        // Extract the HTML content once Quill is ready
        setHtml(quill.root.innerHTML);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delta]);

  return (
    <div
      className="p-2 hover:bg-gray-200/50 cursor-pointer"
      onClick={() => setAction(true)}
    >
      <div ref={quillRef} className="hidden"></div>
      {html === "" ? (
        "Add a description"
      ) : (
        <div
          className="ql-editor cursor-pointer" // Make sure this class is applied for Quill's styling
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      )}
    </div>
  );
}