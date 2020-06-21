import React from 'react';
import {shallow} from 'enzyme';
import UploadImage from './uploadImage';

describe('Upload Image Component Test Case',()=>{
    let props={
        onChange:jest.fn(),
        image:{
            preview:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq9_coI2dlwltnSCwfiuoIrTYKFQb4of1Rf-2VgAKpGr00TDd8&usqp=CAU'
        }
    }
    let wrapper=shallow(<UploadImage {...props}/>)
     let input=wrapper.find('input');
   
    it('Upload Image Component should Rendered',()=>{
        expect(wrapper).toMatchSnapshot();
    })
    it('Upload Image Should Contain Input TAG',()=>{
        expect(input.length).toBe(1);
    })
})
