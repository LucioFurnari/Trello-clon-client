import { CardData } from '@/types/types';
import { useState, Dispatch, SetStateAction, useEffect, useCallback} from 'react';
import { updateCard } from '@/lib/card';
// import { useQuill } from 'react-quilljs';
import Quill from 'quill';
import { useParams } from 'next/navigation';
import { Delta } from 'quill/core';

export default function MyEditor({ card, content, setContent ,setAction }: { card: CardData, content: Delta | undefined, setContent: Dispatch<SetStateAction<Delta | undefined>>, setAction: Dispatch<SetStateAction<boolean>>}) {
  const params = useParams<{card: string}>()
  const [quill, setQuill] = useState<Quill>();
  // Save input of the editor in delta
  const [descriptionContent, setDescriptionContent] = useState<Delta>();
  // const { quill, quillRef } = useQuill();

  // Callback to create quill editor.
  const wrappedRef = useCallback((wrapper: any) => {
    if (wrapper == null) return
    wrapper.innerHTML = ''
    const editor = document.createElement('div');
    wrapper.append(editor)
    const quill = new Quill('#editor-container', {theme: 'snow'})
    setQuill(quill);
    if (content) {
      quill.setContents(content)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!quill) return

    // Handle quill changes
    const handler = (delta: Delta, oldDelta: Delta, source: string) => {
      if (source !== 'user') return

      const content = quill.getContents();
      // Get and save editor content
      setDescriptionContent(content)
    }
    quill.on('text-change', handler);
    return () => {
      quill.off('text-change', handler);
    };
  }, [quill])

  async function handleSaveContent() {
    const updatedCard = JSON.parse(JSON.stringify({ ...card ,description: descriptionContent }));
    setContent(descriptionContent)
    const data = await updateCard(params.card, updatedCard);
    if (!data) return
    setAction(false)
  }


  return (
    <div>
    {/* <div ref={quillRef}/> */}
    <div id='editor-container' ref={wrappedRef} />
      <button className='bg-blue-600 hover:bg-blue-500 rounded p-2 px-4 text-white' onClick={() => handleSaveContent()}>Save</button>
      <button className='ml-2 mt-4 p-2 rounded hover:bg-slate-300 ' onClick={() => setAction(false)}>Cancel</button>
    </div>
  );
}