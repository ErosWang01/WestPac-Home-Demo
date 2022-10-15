import styled from "styled-components";
import { color } from "../../../styles/Variables";
import Resignation from "../../../assets/wbc_sol_h_great-resignation_432x325.jpeg";

const { borderColor, whiteColor, textPurpleColor, textColor } = color;



const CardWrapper = styled.div`
    width: 355px;
    height: 485px;
    border: 1px solid ${borderColor};
    background-color: ${whiteColor};
`;

const ImageWrapper = styled.div`
    height: 330px;
    background-image: url(${Resignation});
`;

const TextWrapper = styled.div`
    padding: 18px 18px 30px;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 800;
    color: ${textPurpleColor};
`;

const SubTile = styled.div`
    font-size: 16px;
    color: ${textColor};
    margin: 15px 0px;
`;

const TileOneCard = () => {
    return(
        <CardWrapper>
            <ImageWrapper />
            <TextWrapper>
                <Title>Making the great resignation work for you</Title>
                <SubTile>Let Ruby explain what this could mean for you.</SubTile>
            </TextWrapper>
        </CardWrapper>

    )
};

export default TileOneCard;