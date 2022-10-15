import styled from 'styled-components';
import { SocialList } from '../../../constants/socialmedium';
import Logo from '../../../assets/Westpac-Logo.png';

const Wrapper = styled.div`
    padding:20px;
    display: flex;
    justify-content: space-between;
`;

const SocialLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 185px;
`;

const SocialLogoContainer = styled.div`
    width:20px;
`;

const LogoWrapper = styled.div`
    cursor: pointer;
`;

const Solutions = () => {
    return (
        <Wrapper>
            <SocialLogoWrapper>
                {SocialList.map(item => 
                    <SocialLogoContainer key={item.key}>{item.item}</SocialLogoContainer>
                )}
            </SocialLogoWrapper>
            <LogoWrapper><img src={Logo} alt="ligtht-color logo"/></LogoWrapper>
        </Wrapper>
    )
}

export default Solutions;