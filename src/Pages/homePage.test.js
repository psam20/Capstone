import React from 'react';
import {shallow} from 'enzyme';
import HomePage from './homepage';

describe('Check If HomePage Components Renders Correctly',()=>{
    let Wrapper=shallow(<HomePage />);
    it('Should Render HomePage Component Correctly',()=>{
        expect(Wrapper).toMatchSnapshot();
    })
})