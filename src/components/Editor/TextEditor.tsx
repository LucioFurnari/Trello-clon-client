import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: '1'}, { header: '2'}, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered'}, { list: 'bullet' }],
    ['link'],
    ['clean']
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet',
  'link',
];


const MyEditor: React.FC = () => {
  const [content, setContent] = useState<string>('');

  return (
    <div>
      <ReactQuill 
        value={content} 
        onChange={setContent} 
        modules={modules}
        formats={formats}
      />
      <button onClick={() => console.log(content)}>Log Content</button>
    </div>
  );
};

export default MyEditor;
