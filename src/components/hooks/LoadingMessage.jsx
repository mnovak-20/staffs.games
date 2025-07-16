import React from 'react';

const LoadingMessage = ({ text = 'LOADING...' }) => {
    return (
        <div
            className="doto-title"
            style={{
                padding: '80px',
                textAlign: 'center',
                color: 'var(--UofSRed)',
                fontSize: '40px',
            }}
        >
            {text}
        </div>
    );
};

export default LoadingMessage;
