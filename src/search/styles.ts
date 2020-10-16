import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

export const StyledSearch = styled(Search)`
    width: 400px;
    align-self: center;
    margin-bottom: ${props => props.theme.spaces.default};
`;
