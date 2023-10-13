import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <ul style={{ paddingTop: "5rem" }}>
      <li>
        <a href="/inventory">list</a>
      </li>
      <li>
        <a href="/uploadItem">create</a>
      </li>
    </ul>
  );
}
