import { useState, Dispatch, SetStateAction, useEffect, useRef, useCallback} from 'react';
import { updateCard } from '@/lib/card';
// import { useQuill } from 'react-quilljs';
import Quill from 'quill';
// import "quill/dist/quill.snow.css";
import { useParams } from 'next/navigation';
import { Delta } from 'quill/core';

export default function MyEditor({ card, setAction }: { card: any, setAction: Dispatch<SetStateAction<boolean>> }) {
  const [content, setContent] = useState(card.description || ''); // Initial value from card
  const params = useParams<{ card: string }>();
  const [quill, setQuill] = useState<Quill>();
  // const { quill, quillRef } = useQuill();

  const wrappedRef = useCallback((wrapper: any) => {
    if (wrapper == null) return
    wrapper.innerHTML = ''
    const editor = document.createElement('div');
    wrapper.append(editor)
    const quill = new Quill('#editor-container', {theme: 'snow'})
    setQuill(quill);
  }, [])

  useEffect(() => {
    if (!quill) return

    // Handle quill changes
    const handler = (delta: Delta, oldDelta: Delta, source: string) => {
      if (source !== 'user') return
      console.log(delta)
      console.log(oldDelta)
    }
    quill.on('text-change', handler);

    return () => {
      quill.off('text-change', handler);
    };
  }, [quill])

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
    <>
    {/* <div ref={quillRef}/> */}
    <div id='editor-container' ref={wrappedRef}></div>
    <div>
      <button onClick={() => console.log(content)}>Log Content</button>
      <button onClick={() => handleSave()}>Save</button>
      <button className='ml-2 mt-4 p-2 hover:bg-gray-600' onClick={() => setAction(false)}>Cancel</button>
    </div>
    </>
  );
}