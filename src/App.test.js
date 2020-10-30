import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import hookActions from './actions/hookActions';
import App from './App';


const mockGetSecretWord = jest.fn();

const setup = () => {
    mockGetSecretWord.mockClear();
    hookActions.getSecretWord = mockGetSecretWord;
    return mount(<App />);
    // use mount because useEffect not called on 'shallow'
    // https://github.com/enzymejs/enzyme/issues/2086
}

test("renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
})

describe('getSecretWord calls', () => {
    test('getSecretWord gets called on App mount', () => {
        setup();
        // check to see if secret word has been updated
        expect(mockGetSecretWord).toHaveBeenCalled();
    })
})