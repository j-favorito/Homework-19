import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <>
            <thead>
                <tr className="row">
                    <th className="col-lg-3">Sort By:</th>
                    <th onClick={props.firstHandleClick} className="table-head col-lg-3">First Name</th>
                    <th onClick={props.lastHandleClick} className="table-head col-lg-3">Last Name</th>
                    <th onClick={props.phoneHandleClick} className="table-head col-lg-3">Phone Number</th>
                </tr>
            </thead>
        </>
    );
}

export default Header;