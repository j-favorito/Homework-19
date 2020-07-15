import React from 'react';
import './Table.css';


function Table(props) {
    return (
        <>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-1 table-img-border"><img className="table-img"alt={props.name} src={props.image} /></div>
                <div className="col-lg-2 table-data table-first">{props.first}</div>
                <div className="col-lg-2 table-data table-last">{props.last}</div>
                <div className="col-lg-2 table-data table-phone">{props.phone}</div>
                <div className="col-lg-3"></div>
            </div>

        </>
    );
}

export default Table;