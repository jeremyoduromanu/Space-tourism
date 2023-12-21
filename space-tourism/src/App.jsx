import './App.css';
import backgroundImage from './assets/home/background-home-desktop.jpg';


function App() {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw'
  };

  return ( 
    
   
  
    <body>
    <main>
    <div style={style}>
      <h1>Home Page</h1>
    </div>
    </main>
    </body>
    
  );
}

export default App;