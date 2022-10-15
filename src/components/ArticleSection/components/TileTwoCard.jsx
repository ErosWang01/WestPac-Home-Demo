import styled from "styled-components";
import { color } from "../../../styles/Variables";
import Scams from "../../../assets/wbc-sup_h_b_latest-scams_445x228.jpeg"

const { borderColor, whiteColor, textPurpleColor, textColor } = color;



const CardWrapper = styled.div`
    display: flex;
    width: 720px;
    height: 230px;
    border: 1px solid ${borderColor};
    background-color: ${whiteColor};
`;

const ImageWrapper = styled.div`
    width: 53%;
    background-image: url(${Scams});
`;

const TextWrapper = styled.div`
    padding: 18px 18px 30px;
    width: 47%;
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
                <Title>Latest scams and alerts</Title>
                <SubTile>To stay in the loop and stay protected, check out our list of the latest scams and alerts.</SubTile>
            </TextWrapper>
        </CardWrapper>

    )
};

export default TileOneCard;