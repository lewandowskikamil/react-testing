import React from 'react';
import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';
import hookActions from './actions/hookActions';


const reducer = (state, action) => {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}
const App = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: '' }
  );
  const setSecretWord = secretWord => dispatch({
    type: 'setSecretWord',
    payload: secretWord
  });
  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);
  return (
    <div
      className='container'
      data-test='component-app'
    >
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
