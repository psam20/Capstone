import React from 'react';

const UploadImage = (props) => {
    return (
        <div className="form-group">

            <div>
               
                <input
                    type="file"
                    id="upload-button"
                    
                    onChange={props.onChange}
                />
                 <label htmlFor="upload-button">
                    {props.image.preview ? (
                        <img src={props.image.preview} alt="dummy" width="300" height="300" />
                    ) :""}
                </label>

            
                
            </div>
        </div>
    )
}

export default UploadImage;