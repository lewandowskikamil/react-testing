import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
    return (
        <div
            data-test='component-congrats'
            className='alert alert-success'
        >
            {success && <p
                data-test='congrats-message'
                style={{ margin: 0 }}
            >
                Congratulations! You've correctly guessed the word!
            </p>}
        </div>
    );
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
};

export default Congrats;