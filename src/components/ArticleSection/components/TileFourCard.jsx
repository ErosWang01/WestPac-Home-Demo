import styled from "styled-components";
import { color } from "../../../styles/Variables";
import FlowerIcon from "../../../assets/bunch-flowers-xxl.png";

const { borderColor, purpleBackgroundColor, whiteColor } = color;

const CardWrapper = styled.div`
    display: flex;
    width: 350px;
    height: 230px;
    border: 1px solid ${borderColor};
    background-color: ${purpleBackgroundColor};
`;

const LogoWrapper = styled.div`
    width: 20px;
    height: 20px;
    margin-bottom: 20px;
`;


const TextWrapper = styled.div`
    padding: 18px 18px 30px;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 800;
    color: ${whiteColor};
`;

const SubTile = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${whiteColor};
    margin-top: 15px;
`;

const TileOneCard = () => {
    return(
        <CardWrapper>
            <TextWrapper>
                <LogoWrapper><img src={FlowerIcon} alt="search"/></LogoWrapper>
                <Title>Planning for your financial future</Title>
                <SubTile>This video takes a high level, long term view of a financial plan that can help you to achieve your life goals.</SubTile>
            </TextWrapper>
        </CardWrapper>

    )
};

export default TileOneCard;