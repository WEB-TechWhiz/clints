"use client"
import React, { useState } from 'react';

function Chat() {
    // State to manage notification visibility
    const [showNotification, setShowNotification] = useState(false);

    // Function to handle button click and show notification
    const handleClick = () => {
        setShowNotification(true);
        // Automatically hide the notification after 3 seconds
        setTimeout(() => {
            setShowNotification(false);
        }, 10000);
    };

    return (
        <div className="relative">
            {/* Chat button */}
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-md flex items-center justify-center"
            >
                <svg className="s1ff97qc icon">
                                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Chat"></use>
                                </svg>
                Chat
            </button>

            {/* Notification */}
            {showNotification && (
                <div className="absolute top-0 right-0 mt-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
                    Notification: Chat button clicked!
                </div>
            )}
        </div>
    );
}

export default Chat;
