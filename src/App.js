import React, {useState, useEffect} from "react"
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <h1 className="title">Veja as últimas notícias</h1>
      <Menu/>
      <NewsGrid/>
    </div>
  )
}

export default App