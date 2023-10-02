import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <ul style={{ paddingTop: "5rem" }}>
      <li>
        <a href="/recordList">list</a>
      </li>
      <li>
        <a href="/create">create</a>
      </li>
    </ul>
  );
}
