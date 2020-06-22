import React from 'react';
import {shallow} from 'enzyme';

import About from './About';

describe('About Page Testing',()=>{
    let Wrapper=shallow(<About />);
     it('Should Render About Page Correctly',()=>{
         expect(Wrapper).toMatchSnapshot();
     })
})
