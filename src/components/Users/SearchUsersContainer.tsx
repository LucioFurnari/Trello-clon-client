import { useState } from "react"
import MessageModal from "../Modal/MessageModal";
import SearchUsersForm from "./SearchUsersForm"
import UsersList from "./UsersList"

interface SearchUsersContainerProps {
  workspaceId: string
}

export default function SearchUsersContainer({ workspaceId }: SearchUsersContainerProps) {
  const [open, setOpen] = useState(false);
  const [result, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
    setHasSearched(false); // Reset hasSearched when opening the modal
  };

  const handleCloseModal = () => {
    setOpen(false);
    setResults([]); // Optionally reset the results as well
    setHasSearched(false); // Reset when closing the modal
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="text-gray-100 py-2 pl-2 w-full text-left text-sm hover:bg-slate-300/20">Add members</button>
      {
        open &&
        <MessageModal setAction={handleCloseModal} >
          <>
            <SearchUsersForm setLoading={setLoading} setResults={setResults} setSearched={setHasSearched}/>
            { (hasSearched && !loading && result.length == 0) && <p>No results found</p>}
            <UsersList users={result} workspaceId={workspaceId}/>
          </>
        </MessageModal>
      }
    </div>
  )
}