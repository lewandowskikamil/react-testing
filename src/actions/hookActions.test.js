import moxios from 'moxios';
import { getSecretWord } from './hookActions';

describe('moxios tests', () => {
    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());
    test('calls getSecretWord callback on axios response', async () => {
        const secretWord = 'party';

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: secretWord,
            });
        });

        // create mock for callback arg
        const mockSetSecretWord = jest.fn();
        await getSecretWord(mockSetSecretWord);
        // check if mock was run with the correct arg
        expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
    })
})