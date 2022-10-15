import styled from 'styled-components';
import { color } from '../../../styles/Variables';
const { textColor, primaryColor } = color;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Links = styled.div`
    font-size: 16px;
    padding: 7px;
    color: ${textColor};
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const Arrow = styled.div`
        margin-right: 5px;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-top: 2px solid ${primaryColor};
        border-right: 2px solid ${primaryColor};
        transform: rotate(45deg);
`;

const Column = props => {
    const { link } = props;
    return (
        <Wrapper className='column-item'>
            <Arrow />
            <Links>{link}</Links>
        </Wrapper>
    )
};

export default Column;