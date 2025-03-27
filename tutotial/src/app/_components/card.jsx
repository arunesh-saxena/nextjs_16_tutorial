import React from 'react';

const cardStyle = {
    // width: '300px',
    // height: '200px',
    border: '1px solid #ccc',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',


};

const Card = ({ title, description, children }) => {
    return (
        <div className="card" style={cardStyle}>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                {children}
            </div>
        </div>
    );
};

export default Card;