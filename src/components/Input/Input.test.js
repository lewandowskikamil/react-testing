import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';

const defaultProps = {
    secretWord: 'party',
}
const setup = (props = {}) => {
    const setupProps = {
        ...defaultProps,
        ...props
    }
    return shallow(<Input {...setupProps} />)
}

test("renders without error", () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
})
test("does not throw warning with expected props", () => {
    checkProps(Input, defaultProps);
});

describe("state controlled input field", () => {
    let wrapper;
    let mockSetCurrentGuess=jest.fn();
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        // why clearing that mock function is necessary
        // can we not do this and instead use 'toHaveBeenLastCalledWith'?
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        wrapper = setup();
    });
    test("state updates with value of input box upon change", () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
    test("state is cleared upon submit button click", () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        const mockEvent = { preventDefault: () => { } };
        submitButton.simulate('click', mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
    // update success context if guess is correct
    // update guessedWordsContext
})