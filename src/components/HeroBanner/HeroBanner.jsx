import styled from 'styled-components';
import { color } from '../../styles/Variables';
import Button from '../Button/Button';
import BackGroundImage from '../../assets/wbc-fbc_money-management_1240x390.png'

const { textWhiteColor, primaryColor } = color

const HeroBlock = styled.section`
    position: absolute;
    top: 120px;
    width: 100%;
    height: 390px;
    margin: 0 auto;
    border: none;
`;

const BackroundImageContainer = styled.div`
    position: absolute;
    right: 0px;
    width: 1240px;
    height: 390px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${BackGroundImage});
`;

const TitleContent = styled.div`
    position: absolute;
    top: 0px;
	width: 50%;
    height: 270px;
    padding: 60px;
    background-color: ${primaryColor};
    z-index:1;
`;

const Title = styled.div`
    color: ${textWhiteColor};
    font-size: 48px;
    font-weight: 600;
    font-family: Helvetica, sans-serif;
    text-align: start;
    letter-spacing: -5px;
`;

const SubTitle = styled.p`
    color: ${textWhiteColor};
    font-size: 20px;
    line-height: 25px;
    text-align: start;
    word-wrap: wrap;
`;

const ButtonWrapper = styled.div`
    margin: 90px 0px 0px;
    width: 440px;
`;

const Herobanner = () => {
    return (
        <HeroBlock>
            <TitleContent>
                <Title>
                    GET THE BIGGER PICTURE ON <br/>SPEND
                </Title>
                <SubTitle>
                    Track your spending and cash flow in the Westpac App.
                </SubTitle>
                <ButtonWrapper>
                    <Button theme = 'white'>Find out more</Button>
                </ButtonWrapper>
            </TitleContent>
            <BackroundImageContainer/>
        </HeroBlock>

    )
}

export default Herobanner;