import React from 'react';
import App from '../App';

import {connect} from 'react-redux';

const AppContainer = ({auth})=>{
    return (
        <div>
            <App  auth={auth}/>
        </div>
    )
}

const MapStateToProps=(state)=>({
    auth:state.user.authBool,
  })
  
export default connect(MapStateToProps,null)(AppContainer);