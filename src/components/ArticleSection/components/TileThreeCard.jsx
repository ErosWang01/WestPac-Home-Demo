import styled from "styled-components";
import { color } from "../../../styles/Variables";
import CarIcon from "../../../assets/car-4-xxl.png";

const { borderColor, primaryColor, whiteColor } = color;

const CardWrapper = styled.div`
    display: flex;
    width: 350px;
    height: 230px;
    border: 1px solid ${borderColor};
    background-color: ${primaryColor};
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
                <LogoWrapper><img src={CarIcon} alt="search"/></LogoWrapper>
                <Title>Car finance options</Title>
                <SubTile>Before you take a test drive, put yourself in the driver’s seat by learning about some of the different ways you could finance a car.</SubTile>
            </TextWrapper>
        </CardWrapper>

    )
};

export default TileOneCard;