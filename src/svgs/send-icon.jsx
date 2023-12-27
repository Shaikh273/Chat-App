import React from 'react';

const SendIcon = ({ onClick }) => {
    return (
        <svg
            onClick={onClick}
            width="43"
            height="43"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="22.5" cy="22.5" r="22.5" fill="#4399FF" />
            <path
                d="M26.7987 22.8135L14.826 24.8081C14.6883 24.8311 14.5592 24.8899 14.4515 24.9786C14.3438 25.0673 14.2613 25.1829 14.2124 25.3135L10.0843 36.372C9.69005 37.3892 10.7535 38.3587 11.7295 37.8692L40.342 23.5653C40.5398 23.4662 40.706 23.314 40.8222 23.1258C40.9385 22.9376 41 22.7208 41 22.4996C41 22.2785 40.9385 22.0617 40.8222 21.8735C40.706 21.6853 40.5398 21.5331 40.342 21.434L11.7295 7.1301C10.7535 6.64218 9.69005 7.61166 10.0843 8.62724L14.214 19.6857C14.2629 19.8164 14.3453 19.9319 14.4531 20.0207C14.5608 20.1094 14.6899 20.1682 14.8276 20.1912L26.8003 22.1858C26.875 22.1977 26.943 22.2358 26.9921 22.2934C27.0412 22.3509 27.0681 22.424 27.0681 22.4996C27.0681 22.5753 27.0412 22.6484 26.9921 22.7059C26.943 22.7635 26.875 22.8016 26.8003 22.8135H26.7987Z"
                fill="white"
            />
        </svg>
    );
};

export default SendIcon;