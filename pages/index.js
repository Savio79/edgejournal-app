export default function Home() {
  return (
    <div style={{
      background:"#f3f4f6",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"Arial"
    }}>

      <div style={{
        background:"white",
        padding:"40px",
        borderRadius:"20px",
        width:"500px",
        boxShadow:"0 10px 30px rgba(0,0,0,0.1)"
      }}>

        <h1 style={{
          fontSize:"42px",
          marginBottom:"10px"
        }}>
          EdgeJournal
        </h1>

        <p style={{
          color:"#666",
          marginBottom:"30px"
        }}>
          Trading Performance Dashboard
        </p>

        <div style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"15px"
        }}>

          <div style={{
            background:"#f9fafb",
            padding:"20px",
            borderRadius:"15px"
          }}>
            Equity
            <div style={{
              fontSize:"28px",
              fontWeight:"bold",
              marginTop:"10px"
            }}>
              10,250€
            </div>
          </div>

          <div style={{
            background:"#f9fafb",
            padding:"20px",
            borderRadius:"15px"
          }}>
            Profitto
            <div style={{
              fontSize:"28px",
              fontWeight:"bold",
              color:"#16a34a",
              marginTop:"10px"
            }}>
              +12.4%
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
