import React from 'react';
import TextField from '@material-ui/core/TextField';


const TextInput = (props)=>{

    return (
        <div className="form-group">
        <TextField required id="outlined-required" variant="outlined" label={props.name.toUpperCase()} name={props.name} type={props.type} defaultValue={props.value} onChange={props.onChange} fullWidth={true} multiline={props.multiline}/>
        </div>
    )
}

export default TextInput;