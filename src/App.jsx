import { useState } from "react";

function App() {
  
  const [article, setArticle] = useState([]); // Stato per la lista degli articoli

  const [articleTitle, setArticleTitle] = useState(""); // Stato per il titolo dell'articolo
  const [articleAuthor, setArticleAuthor] = useState(""); // Stato per l'autore dell'articolo

  const handleArticleForm = (event) => {
    event.preventDefault(); // Evita il refresh della pagina

    // Creiamo un nuovo articolo solo quando viene inviato il form
    const newArticle = {
      id: Date.now(),
      title: articleTitle,
      author: articleAuthor
    };

    // Aggiorna lo stato aggiungendo il nuovo articolo alla lista esistente
    const newArray = [...article, newArticle];
    setArticle(newArray);
    console.log(newArray)

    // Resetta i campi del form
    setArticleTitle("");
    setArticleAuthor("");
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mb-5">New Articles</h1>
        <section>
          <h3>Aggiungi un nuovo articolo</h3>
          <form onSubmit={handleArticleForm}>
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