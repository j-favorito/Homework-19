import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <>
            <thead>
                <tr>
                    <th></th>
                    <th onClick={props.firstHandleClick} className="table-head">First Name</th>
                    <th onClick={props.lastHandleClick} className="table-head">Last Name</th>
                    <th onClick={props.phoneHandleClick} className="table-head">Phone Number</th>
                </tr>
            </thead>
        </>
    );
}

export default Header;