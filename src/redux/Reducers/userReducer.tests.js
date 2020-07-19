import c from '../actions/usersAction';
import React from 'react';
import userReducer from './userReducer';
import { IsoTwoTone } from '@material-ui/icons';
import { ExpansionPanelActions } from '@material-ui/core';


const INITIAL_STATE={
    currentUser:null,
    authBool:false
}

describe('userReducer',()=>{

    it('should return initial state',()=>{
          expect(userReducer(undefined,{})).toEqual(INITIAL_STATE);
    })
})