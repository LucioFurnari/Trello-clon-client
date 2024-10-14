import { findUsers } from "@/lib/users";
import { useState } from "react";

interface SearchFormProps {
  setResults: (value: []) => void,
  setLoading: (value: boolean) => void,
  setSearched: (value: boolean) => void
}

export default function SearchUsersForm({ setResults, setLoading, setSearched }: SearchFormProps) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(event: React.FormEvent) {
    event.preventDefault();

    if (!query.trim()) {
      setError('Please enter a search term.');
      setSearched(false);
      return;
    }
    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const users = await findUsers(query);
      setResults(users);
    } catch (error) {
      setError('An error occurred while searching. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleInput(e: any) {
    setQuery(e.target.value);
  }

  return (
    <form className="flex flex-col" onSubmit={handleSearch}>
      <input
        className="border-b-2 py-2 pl-2 rounded-t"
        value={query}
        onChange={handleInput}
        placeholder="Search for users..."
      />
      <span className="text-xs text-gray-500 mt-2">* Enter an name or a email to find the user.</span>
      { error && <p className="text-red-500">{error}</p>}
      <button className="ml-auto mt-4 p-2 px-4 rounded hover:bg-slate-300/50" type="submit">Search</button>
    </form>
  )
}