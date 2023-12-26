import { useEffect, useState } from "react"
import './App.css'

function App() {

  const [vazaoAr, setVazaoAr] = useState(0)
  const [recuperacao, setrecuperacao] = useState(0.8)
  const [producaoO2, setProducaoO2] = useState(vazaoAr*0.21*recuperacao)
  const [producaoN2, setProducaoN2] = useState(vazaoAr*0.78)
  const [producaoLO2, setProducaoLO2] = useState(0)
  const [producaoLN2, setProducaoLN2] = useState(0)
  const [producaoGO2, setProducaoGO2] = useState(producaoO2 - producaoLO2)
  const [producaoGN2, setProducaoGL2] = useState(producaoN2 - producaoLN2)
  const [T250Operando, setT250Operando] = useState(false)

  useEffect(() => {
    if (T250Operando) {
      const prodO2 = vazaoAr * 0.21 * recuperacao
      const prodN2 = vazaoAr * 0.78
      const prodGO2 = prodO2 - producaoLO2
      const prodGN2 = prodN2 - producaoLN2

      setProducaoO2(prodGO2)
      setProducaoN2(prodN2)
      setProducaoGO2(prodGO2)
      setProducaoGL2(prodGN2)
    }
  },[vazaoAr, producaoLN2, producaoLO2])


    const handleT250CheckBox = (event) => {
      setT250Operando(event.target.checked)
    }


  return (
    <>
      <div className="card">
        <div className="cardHeader"> 
        <h2>T250</h2>
          <label className="choeckBox" htmlFor="toggleCheckbox">
            <input type="checkbox" id="toggleCheckbox" checked={T250Operando} onChange={handleT250CheckBox}  />
            <div className="toggle"></div>
          </label>
          {console.log(T250Operando)}
          <label >Vazao de Ar</label> <br/>
          <input type="number" placeholder="Digite a vazao de ar" onBlur={event => setVazaoAr(event.target.value)} /> <br/>
          <label>Producao de LO2</label> <br/>
          <input type="number" placeholder="Digite a producao de LO2" onBlur={event => setProducaoLO2(event.target.value)} /> <br/>
          <label>Producao de LN2</label> <br/>
          <input type="number" placeholder="Digite a producao de LN2" onBlur={event => setProducaoLN2(event.target.value)} />
        </div>
        <div className="cardBody"> 
          {T250Operando && <>
            <h2>A vazao de ar é de : {vazaoAr}</h2>
            <h2>produção total de O2 : {producaoO2}</h2>
            <h2>produção total de N2 : {producaoN2}</h2>
            <h2>producao total de GO2 : {producaoGO2}</h2>
            <h2>produção de LO2 : {producaoLO2}</h2>
            <h2>producao total de GN2 : {producaoGN2}</h2>
            <h2>produção total de LN2 : {producaoLN2}</h2>

        </>}
        </div>
        </div>

    </>
  )
}

export default App
