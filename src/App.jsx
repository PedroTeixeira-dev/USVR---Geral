import { useEffect, useState } from "react"
import './App.css'

function App() {
// T2100 variaveis
  const [arT2100, setarT2100] = useState(0)
  const [recT2100, setrecT2100] = useState(0.8)
  const [O2TotalT2100, setO2TotalT2100] = useState(arT2100*0.21*recT2100)
  const [N2TotalT2100, setN2TotalT2100] = useState(arT2100*0.78)
  const [Lo2T2100, setLo2T2100] = useState(0)
  const [Ln2T2100, setLn2T2100] = useState(0)
  const [Go2T2100, setGo2T2100] = useState(O2TotalT2100 - Lo2T2100)
  const [Gn2T2100, setGL2T2100] = useState(N2TotalT2100 - Ln2T2100)
  const [T2100Operando, setT2100Operando] = useState(false)

  // T1200 variaveis
  const [arT1200, setarT1200] = useState(0)
  const [recT1200, setrecT1200] = useState(0.8)
  const [O2TotalT1200, setO2TotalT1200] = useState(arT1200*0.21*recT1200)
  const [N2TotalT1200, setN2TotalT1200] = useState(arT1200*0.78)
  const [T1200Operando, setT1200Operando] = useState(false)

  //T850 variaveis
  const [arT850, setarT850] = useState(0)
  const [recT850, setrecT850] = useState(0.8)
  const [O2TotalT850, setO2TotalT850] = useState(arT850*0.21*recT850)
  const [N2TotalT850, setN2TotalT850] = useState(arT850*0.78)
  const [Lo2T850, setLo2T850] = useState(0)
  const [Ln2T850, setLn2T850] = useState(0)
  const [Go2T850, setGo2T850] = useState(O2TotalT850 - Lo2T850)
  const [Gn2T850, setGL2T850] = useState(N2TotalT850 - Ln2T850)
  const [T850Operando, setT850Operando] = useState(false)

    // T250 variaveis
    const [arT250, setarT250] = useState(0)
    const [recT250, setrecT250] = useState(0.8)
    const [O2TotalT250, setO2TotalT250] = useState(arT250*0.21*recT250)
    const [N2TotalT250, setN2TotalT250] = useState(arT250*0.78)
    const [T250Operando, setT250Operando] = useState(false)

    // variaveis totais 
    const [ArPlantasTotal, setArPLantasTotal] = useState(0)
    const [GO2PlantasGeral, setGO2PlantasGeral] = useState(0)
    const [LO2PlantasGeral, setLO2PlantasGeral] = useState(0)
    const [GN2PlantasGeral, setGN2PlantasGeral] = useState(0)
    const [LN2PlantasGeral, setLN2PlantasGeral] = useState(0)


    // atualiza informacoes gerais de producao
    useEffect(() => {
      setGO2PlantasGeral((Go2T2100 + O2TotalT1200 + Go2T850 + O2TotalT250).toLocaleString('pt-BR'))
      setGN2PlantasGeral((Gn2T2100 + N2TotalT1200 + Gn2T850 + N2TotalT250).toLocaleString('pt-BR'))
      setLO2PlantasGeral((parseInt(Lo2T2100) + parseInt(Lo2T850)).toLocaleString('pt-BR'))
      setLN2PlantasGeral((parseInt(Ln2T2100) + parseInt(Ln2T850)).toLocaleString('pt-BR'))
      setArPLantasTotal((parseInt(arT2100) + parseInt(arT1200) + parseInt(arT850) + parseInt(arT250)).toLocaleString('pt-BR'))
    }, [T250Operando, T850Operando, T1200Operando, T2100Operando, arT250, arT850, arT1200, arT2100, O2TotalT250, Go2T850, O2TotalT1200, Go2T2100, N2TotalT250, Gn2T850, N2TotalT1200, Gn2T2100, Lo2T2100, Lo2T850, Ln2T850, Ln2T2100])


  //T2100 atualizando informacoes
  useEffect(() => {
    if (T2100Operando) {
      const prodO2T2100 = arT2100 * 0.21 * recT2100
      const prodN2T2100 = arT2100 * 0.78
      const prodGO2T2100 = prodO2T2100 - Lo2T2100
      const prodGN2T2100 = prodN2T2100 - Ln2T2100

      setO2TotalT2100(prodGO2T2100)
      setN2TotalT2100(prodN2T2100)
      setGo2T2100(prodGO2T2100)
      setGL2T2100(prodGN2T2100)
    }
  },[arT2100, Ln2T2100, Lo2T2100, T2100Operando])

    //T1200 atualizando informacoes
    useEffect(() => {
      if (T1200Operando) {
        const prodO2T1200 = arT1200 * 0.21 * recT1200
        const prodN2T1200 = arT1200 * 0.78
  
        setO2TotalT1200(prodO2T1200)
        setN2TotalT1200(prodN2T1200)
      }
    },[arT1200, T1200Operando])

      //T850 atualizando informacoes
  useEffect(() => {
    if (T850Operando) {
      const prodO2T850 = arT850 * 0.21 * recT850
      const prodN2T850 = arT850 * 0.78
      const prodGO2T850 = prodO2T850 - Lo2T850
      const prodGN2T850 = prodN2T850 - Ln2T850

      setO2TotalT850(prodGO2T850)
      setN2TotalT850(prodN2T850)
      setGo2T850(prodGO2T850)
      setGL2T850(prodGN2T850)
    }
  },[arT850, Ln2T850, Lo2T850, T850Operando])

      //T250 atualizando informacoes
      useEffect(() => {
        if (T250Operando) {
          const prodO2T250 = arT250 * 0.21 * recT250
          const prodN2T250 = arT250 * 0.78
    
          setO2TotalT250(prodO2T250)
          setN2TotalT250(prodN2T250)
        }
      },[arT250, T250Operando])


    // muda o estado da T2100 de operando para parada e rezeta os valores
    const handleT2100CheckBox = (event) => {
      setT2100Operando(event.target.checked)
      if (!T2100Operando) {
        setarT2100(0)
        setLo2T2100(0)
        setLn2T2100(0)
        setGo2T2100(0)
        setGL2T2100(0)
      }
    }

        // muda o estado da T1200 de operando para parada e rezeta os valores
        const handleT1200CheckBox = (event) => {
          setT1200Operando(event.target.checked)
          if (!T1200Operando) {
            setarT1200(0)
          }
        }

    // muda o estado da T850 de operando para parada e rezeta os valores
    const handleT850CheckBox = (event) => {
      setT850Operando(event.target.checked)
      if (!T850Operando) {
        setarT850(0)
        setLo2T850(0)
        setLn2T850(0)
        setGo2T850(0)
        setGL2T850(0)
      }
    }

            // muda o estado da T250 de operando para parada e rezeta os valores
            const handleT250CheckBox = (event) => {
              setT250Operando(event.target.checked)
              if (!T250Operando) {
                setarT250(0)
              }
            }

  return (
    <>
    <header>
      <img src="https://www.whitemartins.com.br/-/media/corporate/praxair-brazil/images/praxair-wm-logo-1.png?rev=84d5a3ddc97c4d0881b6296b859706df&h=36&w=205&la=pt-BR&hash=717116338BA89DE17A4723AD1D274D60E9E83B72" alt="White Martins" />
      <ul>
        <li>Plantas</li>
        <li>Compressores</li>
        <li>Rotinas</li>
      </ul>
    </header>
    <section id="plantas">
    <div  className="container">
      <div className="card" id="T2100">
          <div className="cardHeader"> 
          <h2>T2100</h2>
            <label className="choeckBox" htmlFor="toggleCheckboxT2100">
              <input type="checkbox" id="toggleCheckboxT2100" checked={T2100Operando} onChange={handleT2100CheckBox}  />
              <div className="toggle"></div>
            </label>
            {console.log(T2100Operando)}
            {T2100Operando && <>
              <label >Vazao de Ar</label> <br/>
            <input type="number" placeholder="Digite a vazao de ar" onBlur={event => setarT2100(event.target.value)} /> <br/>
            <label>Producao de LO2</label> <br/>
            <input type="number" placeholder="Digite a producao de LO2" onBlur={event => setLo2T2100(event.target.value)} /> <br/>
            <label>Producao de LN2</label> <br/>
            <input type="number" placeholder="Digite a producao de LN2" onBlur={event => setLn2T2100(event.target.value)} />
            </>}
          </div>
          <div className="cardBody"> 
            {T2100Operando && <>
              <h3>A vazao de ar é de : {arT2100}</h3>
              <h3>Produção total de O2 : {O2TotalT2100}</h3>
              <h3>Produção total de N2 : {N2TotalT2100}</h3>
              <h3>Produção total de GO2 : {Go2T2100}</h3>
              <h3>Produção de LO2 : {Lo2T2100}</h3>
              <h3>producao total de GN2 : {Gn2T2100}</h3>
              <h3>Produção total de LN2 : {Ln2T2100}</h3>
          </>}
          </div>
      </div>
      <div className="card" id="T1200">
          <div className="cardHeader"> 
          <h2>T1200</h2>
            <label className="choeckBox" htmlFor="toggleCheckboxT1200">
              <input type="checkbox" id="toggleCheckboxT1200" checked={T1200Operando} onChange={handleT1200CheckBox}  />
              <div className="toggle"></div>
            </label>
            {console.log(T1200Operando)}
            {T1200Operando && <>
              <label >Vazao de Ar</label> <br/>
            <input type="number" placeholder="Digite a vazao de ar" onBlur={event => setarT1200(event.target.value)} /> <br/>
            </>}
          </div>
          <div className="cardBody"> 
            {T1200Operando && <>
              <h3>A vazao de ar é de : {arT1200}</h3>
              <h3>Produção total de O2 : {O2TotalT1200}</h3>
              <h3>Produção total de N2 : {N2TotalT1200}</h3>
              <p>Observação: A T1200 só produz gás.</p>
          </>}
          </div>
      </div>
      <div className="card" id="T850">
          <div className="cardHeader"> 
          <h2>T850</h2>
            <label className="choeckBox" htmlFor="toggleCheckboxT850">
              <input type="checkbox" id="toggleCheckboxT850" checked={T850Operando} onChange={handleT850CheckBox}  />
              <div className="toggle"></div>
            </label>
            {console.log(T850Operando)}
            {T850Operando && <>
              <label >Vazao de Ar</label> <br/>
            <input type="number" placeholder="Digite a vazao de ar" onBlur={event => setarT850(event.target.value)} /> <br/>
            <label>Producao de LO2</label> <br/>
            <input type="number" placeholder="Digite a producao de LO2" onBlur={event => setLo2T850(event.target.value)} /> <br/>
            <label>Producao de LN2</label> <br/>
            <input type="number" placeholder="Digite a producao de LN2" onBlur={event => setLn2T850(event.target.value)} />
            </>}
          </div>
          <div className="cardBody"> 
            {T850Operando && <>
              <h3>A vazao de ar é de : {arT850}</h3>
              <h3>Produção total de O2 : {O2TotalT850}</h3>
              <h3>Produção total de N2 : {N2TotalT850}</h3>
              <h3>Produção total de GO2 : {Go2T850}</h3>
              <h3>Produção de LO2 : {Lo2T850}</h3>
              <h3>producao total de GN2 : {Gn2T850}</h3>
              <h3>Produção total de LN2 : {Ln2T850}</h3>
          </>}
          </div>
      </div>
      <div className="card" id="T250">
          <div className="cardHeader"> 
          <h2>T250</h2>
            <label className="choeckBox" htmlFor="toggleCheckboxT250">
              <input type="checkbox" id="toggleCheckboxT250" checked={T250Operando} onChange={handleT250CheckBox}  />
              <div className="toggle"></div>
            </label>
            {console.log(T250Operando)}
            {T250Operando && <>
              <label >Vazao de Ar</label> <br/>
            <input type="number" placeholder="Digite a vazao de ar" onBlur={event => setarT250(event.target.value)} /> <br/>
            </>}
          </div>
          <div className="cardBody"> 
            {T250Operando && <>
              <h3>A vazao de ar é de : {arT250}</h3>
              <h3>Produção total de O2 : {O2TotalT250}</h3>
              <h3>Produção total de N2 : {N2TotalT250}</h3>
              <p>Observação: A T250 só produz gás.</p>
          </>}
          </div>
      </div>
    </div>
    <div className="infoPlantas">
        <h2 className="infoPlantasTitulo">Informações gerais de produção das plantas</h2>
        <p className="infoPlantasItem">Produção total de GO2: {GO2PlantasGeral} </p>
        <p className="infoPlantasItem">Produção total de GN2: {GN2PlantasGeral} </p>
        <p className="infoPlantasItem">Produção total de LO2: {LO2PlantasGeral} </p>
        <p className="infoPlantasItem">Produção total de LN2: {LN2PlantasGeral} </p>
        <p className="infoPlantasItem">Ar total consumido : {ArPlantasTotal} </p>
    </div>
    </section>
    </>
  )
}

export default App
