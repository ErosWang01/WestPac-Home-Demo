import styled from 'styled-components';
import { color } from '../../styles/Variables';
import Services from './components/Services';
import Social from './components/Social';

const { whiteColor, primaryColor } = color;

const FooterContainer = styled.section`
    border-top: 13px solid ${primaryColor};
	background-color: ${whiteColor};
    width: 100%;
    position: absolute;
    top: 1675px;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
	max-width: 1100px;
	padding: 20px 0;
`;

const Footer = () => {
    return(
        <FooterContainer>
            <Content>
                <Services />
                <Social />
            </Content>
        </FooterContainer>
    )
};

export default Footer;