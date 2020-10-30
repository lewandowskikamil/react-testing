import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
    checkProps(GuessedWords, defaultProps);
});
describe("if there are words guessed", () => {
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 3 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ]
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    })
    test("renders without error", () => {
        const guessedWordsComponent = findByTestAttr(wrapper, 'component-guessed-words');
        expect(guessedWordsComponent.length).toBe(1);
    });
    test("renders 'guessed words' section", () => {
        const guessedWords = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWords.length).toBe(1);
    });
    test("renders correct number of guessed words", () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
})
describe("if there are no words guessed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    })
    test("renders without error", () => {
        const guessedWordsComponent = findByTestAttr(wrapper, 'component-guessed-words');
        expect(guessedWordsComponent.length).toBe(1);
    });
    test("renders instructions to guess a word", () => {
        const instructions = findByTestAttr(wrapper, 'instructions');
        expect(instructions.text().length).not.toBe(0);
    });
})

