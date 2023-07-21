import { useState } from "react";

function App() {
  const [compteur, setCompteur] = useState(1)

  const handleClick = () => {
    setCompteur(compteur + 1)
  }

  return <div>
    <h1>{compteur}</h1><button onClick={handleClick}>Incrémente +</button>
  </div>
}

export default App;

