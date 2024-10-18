'use client'

import { useState } from "react"

interface MembersListProps {
  members: any[] | null,
}

export default function MembersList({ members }: MembersListProps ) {
  const [open, setOpen] = useState(false);

  function handleOpenMenu() {
    setOpen(!open);
  }

  return (
    <div className="relative ml-10">
      <button onClick={handleOpenMenu} className="bg-gray-300/50 hover:bg-gray-200/50 p-2 px-4 rounded">Members</button>
      {
        open &&
        <ul className="absolute top-10 left-0 bg-gray-100 p-2 w-full">
        {
          members &&
          members.map((member) => {
            return (
              <li key={member.id}>{member.name}</li>
            )
          })
        }
      </ul>
      }
    </div>
  )
}