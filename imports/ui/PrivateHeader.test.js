import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PrivateHeader from './PrivateHeader';
    
Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
    describe('PrivateHeader', function () {
        it('should set button text to logout', function () {
            const wrapper = mount( <PrivateHeader title="Test title" handleLogout={() => {}} />);

            const buttonText = wrapper.find('button').text();
            expect(buttonText).toBe('Logout');
        });

        it('should should use title prop as h1 text', function () {
            const wrapper = mount( <PrivateHeader title="Test title" handleLogout={() => {}} />);

            const actualTitle = wrapper.find('h1').text();
            expect(actualTitle).toBe('Test title');
        });



        it('should call handleLogout on click', function () {
            const spy = expect.createSpy();
            const wrapper = mount(<PrivateHeader title="Test title" handleLogout={spy}/>);

            wrapper.find('button').simulate('click');
            expect(spy).toHaveBeenCalled();
        });
    });//end describe
}//end Meteor.isClient