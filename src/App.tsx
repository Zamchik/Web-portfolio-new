import './App.css'
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';

function App() {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <Introduction />
            </main>
        </div>
    );
}

export default App