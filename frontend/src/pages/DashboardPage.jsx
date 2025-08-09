import { useState } from "react";
import api from "../api";

export default function DashboardPage() {
  const [link, setLink] = useState({ title: "", url: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/links", link);
    console.log("Link added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={link.title}
        onChange={(e) => setLink({ ...link, title: e.target.value })}
      />
      <input
        placeholder="URL"
        value={link.url}
        onChange={(e) => setLink({ ...link, url: e.target.value })}
      />
      <button type="submit">Add Link</button>
    </form>
  );
}
