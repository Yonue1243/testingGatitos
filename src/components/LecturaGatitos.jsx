import { useEffect, useState } from "react"


const LecturaGatitos = () => {

  const [fact, setFact] = useState('')


  useEffect(() => {

    fetch('https://catfact.ninja/fact').then(res => res.json()).then(response => 
    setFact(response.fact)
    )
    
  },[])
  


  return (
    <div className="lecturaGatito">
              <h1 className="tituloGatito">The most unique facts about kittens!</h1>

      {fact ? (
        <p className="factorGatito">
          {fact}
        </p>
      ) : ("Searching for kitten facts!")}

    </div>
  )
}

export default LecturaGatitos