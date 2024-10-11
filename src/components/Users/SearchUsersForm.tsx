import { findUsers } from "@/lib/users";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function SearchUsersForm() {
  const [query, setQuery] = useState('');
  const [result, setResults] = useState([]);

  return (
    <Modal>
      <form>
        <input/>
        <button type="submit">Search</button>
      </form>
    </Modal>
  )
}