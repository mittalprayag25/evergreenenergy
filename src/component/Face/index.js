import React from 'react';
import * as logo from './../../assets/logo_app.png';
import './style.css';

const Face = () => {
    return (
        <div className={'container'}>
            <img src={logo} className='logo' />
            <div className='insideContainer'>
                <span className='faceLabel'>Evergreen Energy Solar Panel</span>
            </div>
        </div>)
}

export default Face;