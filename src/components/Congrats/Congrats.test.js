import React from 'react';
import Congrats from './Congrats';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';

const defaultProps = { success: false };
const setup = (props = {}) => {
    const setupProps={...defaultProps, ...props};
    return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
    const wrapper = setup();
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
    expect(congratsComponent.length).toBe(1);
})
test("renders no text when 'success' prop is false", () => {
    const wrapper = setup();
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
    expect(congratsMessage.length).toBe(0);
});
test("renders non-empty congrats message when 'success' prop is true", () => {
    const wrapper = setup({ success: true });
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
    expect(congratsMessage.text().length).not.toBe(0);
});
test("does not throw warning with expected props", () => {
    const expectedProps = { success: false };
    // thanks to this package, error is returned rather than thrown as a warning
    checkProps(Congrats, expectedProps);
});