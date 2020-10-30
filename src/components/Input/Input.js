import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
    const [currentGuess, setCurrentGuess] = React.useState('');
    const inputChangeHandler = e => {
        setCurrentGuess(e.target.value)
    }
    const btnClickHandler = e => {
        e.preventDefault();
        setCurrentGuess('');
        // update guessWordsContext
        // check against secretWord
        // optionally update success context
    }
    return (
        <div data-test='component-input'>
            <form classname='form-inline'>
                <input
                    data-test='input-box'
                    className='mb-2 mx-sm-3'
                    type='text'
                    value={currentGuess}
                    placeholder='enter guess'
                    onChange={inputChangeHandler}
                />
                <button
                    data-test='submit-button'
                    className='btn btn-primary mb-2'
                    onClick={btnClickHandler}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
}
export default Input;