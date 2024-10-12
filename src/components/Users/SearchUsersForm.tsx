import { findUsers } from "@/lib/users";
import { useState } from "react";

interface SearchFormProps {
  setResults: (value: []) => void,
  setLoading: (value: boolean) => void
}

export default function SearchUsersForm({setResults, setLoading}: SearchFormProps) {
  const [query, setQuery] = useState('');


  async function handleSearch(event: React.FormEvent) {
    event.preventDefault();

    if (!query.trim()) return;
    setLoading(true);
    const users = await findUsers(query);
    setResults(users);
    setLoading(false);
  }

  function handleInput(e: any) {
    setQuery(e.target.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <input 
        value={query}
        onChange={handleInput}
        placeholder="Search for users..."
      />
      <button type="submit">Search</button>
    </form>
  )
}