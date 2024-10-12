import { useState } from "react"
import MessageModal from "../Modal/MessageModal";
import SearchUsersForm from "./SearchUsersForm"
import UsersList from "./UsersList"

export default function SearchUsersContainer() {
  const [open, setOpen] = useState(false);
  const [result, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <button onClick={() => setOpen(true)} className="text-gray-100 py-2 pl-2 w-full text-left text-sm hover:bg-slate-300/20">Add members</button>
      {
        open &&
        <MessageModal setAction={() => setOpen(false)} >
          <>
            <SearchUsersForm setLoading={setLoading} setResults={setResults} />
            <UsersList />
          </>
        </MessageModal>
      }
    </div>
  )
}