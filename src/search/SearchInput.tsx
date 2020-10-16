// External dependencies
import React, { FC } from 'react';

// Local modules
import { ISearchInputProps } from 'search/interfaces';
import { StyledSearch } from 'search/styles';
import { TEXT_PLACEHOLDER } from 'search/texts';

const SearchInput: FC<ISearchInputProps> = ({handleChange, value}) => {
    return (
        <StyledSearch
            placeholder={TEXT_PLACEHOLDER}
            onChange={event => handleChange(event)}
            value={value}
        />
    );
};

export default SearchInput;
