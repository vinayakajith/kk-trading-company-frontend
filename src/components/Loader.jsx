import React from 'react';
import './Loader.css'; // We'll create this next

const Loader = ({ finishLoading }) => {
    return (
        <div className={`loader-overlay ${finishLoading ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <div className="loader-brand">
                    <span className="loader-kk">KK</span>
                </div>
                <div className="loader-text-wrap">
                    <span className="loader-text">Trading Company</span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
