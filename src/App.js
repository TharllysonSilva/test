import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";

function App() {
  //Dados da API como um objeto
  const [items, setItems] = useState([]);
  //Para receber o ID do botão do Menu
  const [active, setActive] = useState([1]);
  // conterá a categoria da noticia que vai ser exibida na página
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      "https:/newsapi.org/v2/top-headlines?country=us&category=${category}&apikey=021baff830cb4c8fa2c688eefdd78b46"
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);
  return (
    <div className="App">
      <h1 className="title">Veja as últimas notícias</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}

export default App;
