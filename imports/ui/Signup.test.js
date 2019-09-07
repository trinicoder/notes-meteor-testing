import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { Signup } from './Signup';

if (Meteor.isClient) {
    describe('Signup', function () {
        it('should show error messages', function (){
            const error = 'This is not working';
            const wrapper = mount(<Signup createUser={() => {}} />);

            wrapper.setState({ error });
            const actualError = wrapper.find('p').text();
            expect(actualError).toBe(error);

            wrapper.setState({error:''});
            expect(wrapper.find('p').length).toBe(0);
        });

        it('should call createUser with the form data', function () {
            const email = 'andrew@tst.com';
            const password = 'password123';
            const spy = expect.createSpy();
            const wrapper = mount(<Signup createUser={spy}/>);

            wrapper.ref('email').value= email;
            wrapper.ref('password').value = password;
            wrapper.find('form').simulate('submit');

            expect(spy.calls[0].arguments[0]).toEqual({ email, password});          

        });
        
        it('should set error if short password', function () {
            const email = 'andrew@tst.com';
            const password = '123                     ';
            const spy = expect.createSpy();
            const wrapper = mount(<Signup createUser={spy}/>);

            wrapper.ref('email').value= email;
            wrapper.ref('password').value = password;
            wrapper.find('form').simulate('submit');

            expect(wrapper.state('error').length).toBeGreaterThan(0);
          
        });

        it('should set createUser callback errors', function () {
            const password = 'password123!';
            const reason = 'Thisis why it failed';
            const spy = expect.createSpy();
            const wrapper = mount(<Signup createUser={spy}/>);

            wrapper.ref('password').value = password;
            wrapper.find('form').simulate('submit');
            //test err object
            spy.calls[0].arguments[1]({ reason });
            expect(wrapper.state('error')).toBe(reason);
            //set error state to emty (see LoginWithPassword function)
            spy.calls[0].arguments[1]();
            expect(wrapper.state('error').length).toBe(0);
        });
    });
}