import { getLetterMatchCount } from './';

describe("getLetterMatchCount", () => {
    const secretWord = 'party';
    test("returns correct count when there are no matching letters", () => {
        const guessedWord = 'bloke';
        const letterMatchCount=getLetterMatchCount(secretWord, guessedWord);
        expect(letterMatchCount).toBe(0);
    })
    test("returns correct count when there are 3 matching letters", () => {
        const guessedWord = 'train';
        const letterMatchCount=getLetterMatchCount(secretWord, guessedWord);
        expect(letterMatchCount).toBe(3);
    })
    test("returns correct count when there are duplicate letters in the guess", () => {
        const guessedWord = 'magma';
        const letterMatchCount=getLetterMatchCount(secretWord, guessedWord);
        expect(letterMatchCount).toBe(1);
    })
})