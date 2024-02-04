import React from 'react';

const Searcher = () => {
    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        // Perform search logic here
    };

    return (
        <div>
            <input type="text" placeholder="Search files" onChange={handleSearch} />
        </div>
    );
};

export default Searcher;
