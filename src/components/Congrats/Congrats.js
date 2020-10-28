import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
    return (
        <div data-test='component-congrats'>
            {success && <p data-test='congrats-message'>
                Congratulations! You've correctly guessed the word!
            </p>}
        </div>
    );
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
};

export default Congrats;