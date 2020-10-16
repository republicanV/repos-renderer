// External dependencies
import React, { FC, useState } from 'react';

// Local modules
import LayoutWrapper from 'layout/LayoutWrapper';
import SearchInput from 'search/SearchInput';
import RepositoryList from "repository/RepositoryList";

const LayoutContainer: FC = () => {
    const [searchTerm, setSearchTerm] = useState('react');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event?.currentTarget?.value);

    return (
        <LayoutWrapper>
            <SearchInput
                handleChange={handleChange}
                value={searchTerm} 
            />
            <RepositoryList searchTerm={searchTerm} />
        </LayoutWrapper>
    );
};

export default LayoutContainer;
