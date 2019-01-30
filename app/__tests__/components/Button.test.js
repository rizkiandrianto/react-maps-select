/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Button from 'components/Button';

describe('Testing Button component', () => {
  const mockCallback = jest.fn();
  const buttonText = 'submit';

  const button = shallow(
    <Button onClick={mockCallback} text={buttonText} />
  );

  it('should run onClick() function', () => {
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
