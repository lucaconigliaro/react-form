import { useState } from "react";

function App() {

  const [articleTitle, setArticleTitle] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");
  
  return (
    <>
      <div className="container">
        <h1 className="text-center mb-5">New Blog Articles</h1>
        <section>
          <h3>Aggiungi un nuovo articolo</h3>
          <form>
            <div>
              <label htmlFor="articleTitle">Nome dell'articolo</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Inserisci il titolo dell'articolo"
              value={articleTitle}
              onChange={(event) => setArticleTitle(event.target.value)}
            />
            </div>

            <div>
              <label htmlFor="articleAuthor">Autore</label>
              <input type="text"
              className="form-control mb-2"
              placeholder="Inserisci l'Autore"
              value={articleAuthor}
              onChange={(event) => setArticleAuthor(event.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Invia</button>
            
          </form>
        </section>
      </div>
    </>
  );
};

export default App