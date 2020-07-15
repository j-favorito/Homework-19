import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <>
            <thead>
                <tr>
                    <th></th>
                    <th onClick={props.firstHandleClick}>First Name</th>
                    <th onClick={props.lastHandleClick}>Last Name</th>
                    <th onClick={props.phoneHandleClick}>Phone Number</th>
                </tr>
            </thead>
        </>
    );
}

export default Header;