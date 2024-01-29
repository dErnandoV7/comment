import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";

import AddComment from "./components/AddComment";

const url = "http://localhost:3000/comments";

function App() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const { data: items, httpConfig } = useFetch(url);

  if (!items) return <p>Carregando...</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    httpConfig(
      {
        id: items.length ? Number(items[items.length-1] + 1) : 1,
        name,
        comment,
      },
      "POST"
    );
    setName("");
    setComment("");
  };
  return (
    <div className="container">
      <h1>Comentários Online</h1>
      <AddComment
        name={name}
        setName={setName}
        comment={comment}
        setComment={setComment}
        handleSubmit={handleSubmit}
      />
        {items.length ? (
          <div className="container-comments">
            {items.map((item) => (
              <div className="comment" key={item.id}>
                <p>
                  <span>Autor</span>: {item.name}
                </p>
                <p>
                  <span>Comentário</span>: {item.comment}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>Sem comentários</p>
        )}
    </div>
  );
}

export default App;
