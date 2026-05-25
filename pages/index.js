```javascript
export default function Home() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#f3f4f6",
      fontFamily: "Arial"
    }}>

      {/* SIDEBAR */}

      <div style={{
        width: "250px",
        background: "#111827",
        color: "white",
        padding: "30px 20px"
      }}>

        <h1 style={{
          fontSize: "28px",
          marginBottom: "40px"
        }}>
          EdgeJournal
        </h1>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>

          <button style={menuButton}>Dashboard</button>
          <button style={menuButton}>Trades</button>
          <button style={menuButton}>Analytics</button>
          <button style={menuButton}>Calendario</button>
          <button style={menuButton}>Settings</button>

        </div>

      </div>

      {/* MAIN */}

      <div style={{
        flex: 1,
        padding: "40px"
      }}>

        <h1 style={{
          fontSize: "42px",
          marginBottom: "10px"
        }}>
          Dashboard
        </h1>

        <p style={{
          color: "#6b7280",
          marginBottom: "40px"
        }}>
          Benvenuto nel tuo Trading Journal
        </p>

        {/* CARDS */}

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px"
        }}>

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

        {/* TABLE */}

        <div style={tableBox}>

          <h2 style={{
            marginBottom: "20px"
          }}>
            Ultimi Trade
          </h2>

          <table style={{
            width: "100%",
            borderCollapse: "collapse"
          }}>

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

      </div>

    </div>
  )
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
```
