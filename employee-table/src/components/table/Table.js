import React from 'react';
import './Table.css';

function Table(props) {
    return (
        <>
        <tbody>
            {props.friends.map(friend => (
                <tr key={friend.id}>
                    <td><img className="table-img" alt={friend.name} src={friend.image} /></td>
                    <td>{friend.firstName}</td>
                    <td>{friend.lastName}</td>
                    <td>{friend.phoneNumber}</td>
                </tr>
            ))}
            </tbody>
        </>
    );
}

export default Table;