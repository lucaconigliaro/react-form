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

  // Funzione per cancellare un articolo tramite il suo ID
  const cancel = (idToDelete) => {
    const newArray = article.filter(curArticle => curArticle.id !== idToDelete);
    setArticle(newArray);
  }

  return (
    <>
      <div className="container">
        <section>
          <h2>Nuovi Articoli</h2>
          {article.length > 0 ? (
            <div className="row">
              {article.map((curArticle) => (
                <div className="col" key={curArticle.id}>
                  <div className="card">
                    <div className="card-body">
                      <h4>{curArticle.title}</h4>
                      <p>{curArticle.author}</p>
                      <button onClick={() => cancel(curArticle.id)} className="btn">🗑️</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Nessun articolo</p>
          )}
        </section>

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