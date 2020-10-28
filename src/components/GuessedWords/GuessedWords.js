import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
    return (
        <div data-test="component-guessed-words">
            {guessedWords.length ? (
                <table
                    data-test='guessed-words'
                    className='table'
                >
                    <thead className='thead-light'>
                        <tr>
                            <th key='guessed-word'>Guessed word</th>
                            <th key='matching-letters'>Matching letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWords.map(({ guessedWord, letterMatchCount }) => (
                            <tr
                                key={guessedWord}
                                data-test='guessed-word'
                            >
                                <td>{guessedWord}</td>
                                <td>{letterMatchCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                    <p data-test='instructions'>
                        Try to guess the secret word!
                    </p>
                )
            }
        </div >
    );
}
GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
}
export default GuessedWords;