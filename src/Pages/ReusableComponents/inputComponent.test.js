import React from 'react';
import {shallow } from 'enzyme';
import InputComponent from './InputComponent';
import { jssPreset } from '@material-ui/core';
describe('Input Component Testing',()=>{
    const props={
        name:name,
        onChange:jest.fn(),
        label:"ProductName",
        defaultValue:"ProductName",
        multiLine:true
    }
    let wrapper = shallow(<InputComponent {...props}/>)
    it('It should render Input Componet',()=>{
        expect(wrapper).toMatchSnapshot();
    })
})