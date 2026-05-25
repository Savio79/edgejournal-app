```javascript id="h0m4qk"
import { useState } from "react";

export default function Home() {

  const [page, setPage] = useState("dashboard");

  const renderPage = () => {

    if(page === "dashboard") {
      return (

        <>
          <h1 style={title}>Dashboard</h1>
          <p style={subtitle}>Panoramica generale del tuo account</p>

          <div style={cards}>

            <div style={card}>
              <div style={label}>Equity</div>
              <div style={value}>10,250€</div>
            </div>

            <div style={card}>
              <div style={label}>Profitto Totale</div>
              <div style={{...value,color:"#16a34a"}}>+12.4%</div>
            </div>

            <div style={card}>
              <div style={label}>Win Rate</div>
              <div style={value}>68%</div>
            </div>

            <div style={card}>
              <div style={label}>Profitto Medio</div>
              <div style={{...value,color:"#16a34a"}}>+1.2%</div>
            </div>

          </div>
        </>

      )
    }

    if(page === "trades") {
      return (

        <>
          <h1 style={title}>Trades</h1>
          <p style={subtitle}>Storico delle operazioni</p>

          <div style={tableBox}>

            <table style={table}>

              <thead>
                <tr>
                  <th style={th}>Asset</th>
                  <th style={th}>Tipo</th>
                  <th style={th}>Profit/Loss</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td style={td}>XAU/USD</td>
                  <td style={td}>LONG</td>
                  <td style={{...td,color:"#16a34a"}}>+250€</td>
                </tr>

                <tr>
                  <td style={td}>US30</td>
                  <td style={td}>SHORT</td>
                  <td style={{...td,color:"#dc2626"}}>-80€</td>
                </tr>

                <tr>
                  <td style={td}>BTC/USD</td>
                  <td style={td}>LONG</td>
                  <td style={{...td,color:"#16a34a"}}>+420€</td>
                </tr>

              </tbody>

            </table>

          </div>
        </>

      )
    }

    if(page === "analytics") {
      return (
        <>
          <h1 style={title}>Analytics</h1>
          <p style={subtitle}>Statistiche avanzate</p>

          <div style={analyticsBox}>
            📈 Equity Curve in arrivo
          </div>
        </>
      )
    }

    if(page === "calendar") {
      return (
        <>
          <h1 style={title}>Calendario</h1>
          <p style={subtitle}>Performance giornaliera</p>

          <div style={analyticsBox}>
            📅 Calendario Performance in arrivo
          </div>
        </>
      )
    }

    if(page === "settings") {
      return (
        <>
          <h1 style={title}>Settings</h1>
          <p style={subtitle}>Configurazioni account</p>

          <div style={analyticsBox}>
            ⚙️ Impostazioni in arrivo
          </div>
        </>
      )
    }

  }

  return (

    <div style={container}>

      {/* SIDEBAR */}

      <div style={sidebar}>

        <h1 style={logo}>
          EdgeJournal
        </h1>

        <div style={menu}>

          <button style={menuButton} onClick={() => setPage("dashboard")}>
            Dashboard
          </button>

          <button style={menuButton} onClick={() => setPage("trades")}>
            Trades
          </button>

          <button style={menuButton} onClick={() => setPage("analytics")}>
            Analytics
          </button>

          <button style={menuButton} onClick={() => setPage("calendar")}>
            Calendario
          </button>

          <button style={menuButton} onClick={() => setPage("settings")}>
            Settings
          </button>

        </div>

      </div>

      {/* MAIN */}

      <div style={main}>
        {renderPage()}
      </div>

    </div>

  )

}

/* STYLES */

const container = {
  display:"flex",
  minHeight:"100vh",
  background:"#f3f4f6",
  fontFamily:"Arial"
}

const sidebar = {
  width:"250px",
  background:"#111827",
  color:"white",
  padding:"30px 20px"
}

const logo = {
  fontSize:"28px",
  marginBottom:"40px"
}

const menu = {
  display:"flex",
  flexDirection:"column",
  gap:"15px"
}

const menuButton = {
  background:"#1f2937",
  border:"none",
  padding:"15px",
  borderRadius:"12px",
  color:"white",
  cursor:"pointer",
  fontSize:"16px"
}

const main = {
  flex:1,
  padding:"40px"
}

const title = {
  fontSize:"42px",
  marginBottom:"10px"
}

const subtitle = {
  color:"#6b7280",
  marginBottom:"40px"
}

const cards = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
  gap:"20px"
}

const card = {
  background:"white",
  padding:"25px",
  borderRadius:"20px",
  boxShadow:"0 10px 25px rgba(0,0,0,0.08)"
}

const label = {
  color:"#6b7280",
  marginBottom:"10px"
}

const value = {
  fontSize:"32px",
  fontWeight:"bold"
}

const tableBox = {
  background:"white",
  padding:"25px",
  borderRadius:"20px",
  boxShadow:"0 10px 25px rgba(0,0,0,0.08)"
}

const table = {
  width:"100%",
  borderCollapse:"collapse"
}

const th = {
  textAlign:"left",
  padding:"15px",
  borderBottom:"1px solid #e5e7eb",
  color:"#6b7280"
}

const td = {
  padding:"15px",
  borderBottom:"1px solid #e5e7eb"
}

const analyticsBox = {
  background:"white",
  padding:"50px",
  borderRadius:"20px",
  fontSize:"24px",
  boxShadow:"0 10px 25px rgba(0,0,0,0.08)"
}
```
