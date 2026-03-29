import './App.css'
import About from './components/About/About';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';

function App() {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <Introduction />
                <About />
            </main>
        </div>
    );
}

export default App