import img1 from './codemarcart.png';

function App() {
  const topStyle = {
    height: '100%',
    width: '100%',
    opacity: '1.0',
  }

  return (
    <div className="App">

      <div style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
        <a href="/" target="_blank" rel="noreferrer">
        <img src={img1} alt="CodeMarcArt" style={topStyle} />
        </a>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="/milagro/docs/#/" target="_blank" rel="noreferrer">
            The Miracle Development Process
          </a>
        </div>
      </div>
    </div>
  )
}

export default App;
