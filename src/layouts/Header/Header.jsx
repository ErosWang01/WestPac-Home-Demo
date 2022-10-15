import Menubar from './components/Menubar';
import Logobar from './components/Logobar';
import styled from 'styled-components';
import { color } from '../../styles/Variables';
const { primaryColor, whiteColor } = color;

const NavContainer = styled.section`
    width: 100%;
    position: fixed;
    top: 0;
    z-index:999;
    box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
`;

const ContentWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.primary ? `${primaryColor}` : `${whiteColor}`};
`;

const Header = () => {
    return (
        <NavContainer>
            <ContentWrapper primary>
                <Menubar />
            </ContentWrapper>
            <ContentWrapper>
                <Logobar />
            </ContentWrapper>
        </NavContainer>
    )

}

export default Header;