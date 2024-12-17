import { useState } from "react";

function App() {
  
  const [articleTitle, setArticleTitle] = useState("");

  return (
    <>
      <div className="container">
        <h1 className="text-center mb-3">New Blog Articles</h1>

        <form className="">
          <label htmlFor="articleTitle">Nome dell'articolo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Inserisci il titolo dell'articolo"
            value={articleTitle}
            onChange={(event) => setArticleTitle(event.target.value)}
          />
        </form>
        <p>Test: {articleTitle}</p>
      </div>
    </>
  )
}

export default App