import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { Login } from './Login';

if (Meteor.isClient) {
    describe('Login', function () {
        it('should show error messages', function (){
            const error = 'This is not working';
            const wrapper = mount(<Login loginWithPassword={() => {}} />);

            wrapper.setState({ error });
            const actualError = wrapper.find('p').text();
            expect(actualError).toBe(error);

            wrapper.setState({error:''});
            expect(wrapper.find('p').length).toBe(0);
        });
    });
}