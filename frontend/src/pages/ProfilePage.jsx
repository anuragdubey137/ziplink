import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function ProfilePage() {
  const { username } = useParams();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    api.get(`/links/${username}`).then((res) => setLinks(res.data.links));
  }, [username]);

  return (
    <div>
      <h2>{username}'s Links</h2>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.url} target="_blank">{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
