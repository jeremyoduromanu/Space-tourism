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
         <div className='container flex flex-col justify-center items-center text-white'>
            <h1 className='text-5xl font-bold'>Space Tourism</h1>
           So, you want to travel to
            Space Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
         </div>
        </div>
      </main>
    </body>
  );
}

export default App;