"use client"

import { useState } from "react"
import MessageModal from "@/components/Modal/MessageModal"
import { createBoard } from "@/lib/board";
import { useWorkspaceContext } from "@/context/WorkspaceContext";

interface CreateBoardButtonProps {
  workspaceId: string,
}

export default function CreateBoardButton({workspaceId}: CreateBoardButtonProps) {
  // const createBoardWithId = createBoard.bind(null, workspaceId);
  const [openModal, setOpenModal] = useState(false);
  const [title, setTile] = useState('');
  const context = useWorkspaceContext();

  async function handleCreateBoard(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newBoard = { title: title };
    const board = await createBoard(workspaceId, newBoard);

    if (board) {
      context?.setWorkspace(context.workspace.map((item) => {
        if (item.workspace.workspaceId === workspaceId) {
          return {...item, workspace: {...item.workspace, boards: [...item.workspace.boards, board]}}
        } else {
          return item;
        }
      }))
    }
  }

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="bg-zinc-700 text-zinc-300 text-sm hover:bg-zinc-600 p-10">
        Create new board
      </button>
      {
        openModal &&
        <MessageModal setAction={() => setOpenModal(false)}>
          <form onSubmit={handleCreateBoard} className="flex flex-col p-2">
            <input onChange={(event: React.FormEvent<HTMLInputElement>) => setTile(event.currentTarget.value)} className="p-2 mb-8 border-b-2 border-gray-700" type="text" placeholder="Board title" name="title" />
            <button className="bg-blue-600 hover:bg-blue-500 py-2 text-xl" type="submit">Create</button>
          </form>
        </MessageModal>
      }
    </>
  )
}