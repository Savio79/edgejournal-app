```javascript id="o4p9cz"
export default function Home() {
  return (
    <div
      style={{
        background: "#dcdcdc",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        EdgeJournal
      </h1>

      <p style={{ color: "#555", marginBottom: "40px" }}>
        Professional Trading Journal
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <div style={card}>
          <h3>Equity Attuale</h3>
          <p>$12,450</p>
        </div>

        <div style={card}>
          <h3>Profitto Totale</h3>
          <p style={{ color: "green" }}>+$2,340</p>
        </div>

        <div style={card}>
          <h3>Win Rate</h3>
          <p>68%</p>
        </div>

        <div style={card}>
          <h3>Profitto Medio</h3>
          <p style={{ color: "green" }}>+$84</p>
        </div>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "18px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};
```
