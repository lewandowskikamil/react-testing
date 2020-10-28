export const getLetterMatchCount = (secretWord, guessedWord) => {
    const secretLetterSet = new Set(secretWord.split(''));
    const guessedLetterSet = new Set(guessedWord.split(''));
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}