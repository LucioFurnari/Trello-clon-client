import { useState, useRef, Dispatch, SetStateAction, useEffect } from 'react';
import { updateCard } from '@/lib/card';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'next/navigation';

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

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';


export default function MyEditor({ card, setAction }: { card: any, setAction: Dispatch<SetStateAction<boolean>> }) {
  const [content, setContent] = useState(card.description || ''); // Initial value from card
  const params = useParams<{ card: string }>();

  async function handleSave() {
    const updatedCard = {
      ...card,
      description: content, // Save the HTML content directly
    };
    
    const updatedData = await updateCard(params.card, updatedCard);
    console.log(updatedData)
    // Ensure the content is updated with what was actually saved
    if (updatedData && updatedData.description) {
      setContent(updatedData.description);
    }
  }

  return (
    <div className='mt-4'>
      <ReactQuill 
        value={content} 
        onChange={setContent} 
        modules={modules}
        formats={formats}
      />
      <button onClick={() => console.log(content)}>Log Content</button>
      <button onClick={() => handleSave()}>Save</button>
      <button className='ml-2 mt-4 p-2 hover:bg-gray-600' onClick={() => setAction(false)}>Cancel</button>
    </div>
  );
}

