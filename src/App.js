import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';

const App = () => {
  return (
    <div className='container'>
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 3 },
        { guessedWord: 'party', letterMatchCount: 5 },
      ]} />
    </div>
  );
}

export default App;
