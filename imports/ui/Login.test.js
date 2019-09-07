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

        it('should call loginWithPassword with the form data', function () {
            const email = 'andrew@tst.com';
            const password = 'password123';
            const spy = expect.createSpy();
            const wrapper = mount(<Login loginWithPassword={spy}/>);

            wrapper.ref('email').value= email;
            wrapper.ref('password').value = password;
            wrapper.find('form').simulate('submit');

            expect(spy.calls[0].arguments[0]).toEqual({ email});
            expect(spy.calls[0].arguments[1]).toBe(password);

        });

        it('should set loginWithPassword callback errors', function () {
            const spy = expect.createSpy();
            const wrapper = mount(<Login loginWithPassword={spy}/>);

            wrapper.find('form').simulate('submit');
            //test err object
            spy.calls[0].arguments[2]({});
            expect(wrapper.state('error').length).toNotBe(0);
            //set error state to emty (see LoginWithPassword function)
            spy.calls[0].arguments[2]();
            expect(wrapper.state('error').length).toBe(0);
        });
    });
}