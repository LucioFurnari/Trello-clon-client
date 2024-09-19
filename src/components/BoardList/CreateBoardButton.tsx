"use client"

import { useState } from "react"
import MessageModal from "@/components/Modal/MessageModal"
import { createBoard } from "@/lib/board";
import { ColorPicker, useColor, Saturation, Hue } from "react-color-palette";

interface CreateBoardButtonProps {
  workspaceId: string,
  setAction: (value?: any) => void
}

export default function CreateBoardButton({workspaceId, setAction}: CreateBoardButtonProps) {
  const [openModal, setOpenModal] = useState(false);
  const [boardData, setBoardData] = useState({
    title: '',
    description: '',
  });
  const [color, setColor] = useColor('#561ecb');

  function handleInput(event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) {
    const { name, value } = event.currentTarget;

    setBoardData({
      ...boardData,
      [name]: value,
    })
  }

  async function handleCreateBoard(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newBoard = {
      ...boardData,
      coverColor: color.hex,
    }
    const board = await createBoard(workspaceId, newBoard);

    if (board) {
      setAction(board);
      setOpenModal(false);
    }
  }

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="bg-zinc-700 text-zinc-300 text-sm hover:bg-zinc-600 p-10 rounded">
        Create new board
      </button>
      {
        openModal &&
        <MessageModal setAction={() => setOpenModal(false)}>
          <form onSubmit={handleCreateBoard} className="flex flex-col p-2">
            <input onChange={handleInput} className="p-2 mb-8 border-b-2 border-gray-700" type="text" placeholder="Title" name="title" />
            <textarea onChange={handleInput} className="p-2 mb-8 border-b-2 border-gray-700" name="description" placeholder="Description..."/>
            <ColorPicker hideInput={['rgb', 'hsv']} color={color} onChange={setColor}/>
            <div style={{ backgroundColor: color.hex} } className="my-4 rounded w-full h-20"></div>
            <button className="bg-blue-600 hover:bg-blue-500 text-gray-200 py-2 text-xl" type="submit">Create</button>
          </form>
        </MessageModal>
      }
    </>
  )
}