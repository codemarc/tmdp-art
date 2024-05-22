import img1 from "./codemarcart.png";

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '75vh', // assuming you want to center it in the whole viewport height
    }}>
      <div style={{ marginBottom: '10px', marginTop: '20px' }}>
      <a
                href="https://codemarc.net/miracle/doc/#/"
                target="_blank"
                rel="noreferrer"
                style={{ textAlign:"center", textShadow: "1px 1px darkgreen" }}
              >
                CodeMarcArt is a Product of The Miracle Development Process.
                To learn more click here
              </a>        
        
        </div>
      <div>
        <a href="/" target="_blank" rel="noreferrer">
          <img src={img1} style={{border:"1px solid grey"}}alt="CodeMarcArt" />
          </a>
      </div>
    </div>
  )
}

export default App;
