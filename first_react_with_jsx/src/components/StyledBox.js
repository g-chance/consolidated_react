import styled from 'styled-components';

const StyledBox = styled.div`
    display: inline-block;
    border: 1px solid black;
    width: ${props => props.height+'px' || '100px'};
    height: ${props => props.height+'px' || '100px'};
    background-color:${props => props.bgColor}
`;

export default StyledBox;