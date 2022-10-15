import styled from "styled-components";
import { color } from "../../styles/Variables";
import TileOneCard from "./components/TileOneCard";
import TileTwoCard from "./components/TileTwoCard";
import TileThreeCard from "./components/TileThreeCard";
import TileFourCard from "./components/TileFourCard";

const { textPurpleColor, greyBackgroundColor } = color;

const  Container = styled.div`
    width: 100%;
    height: 725px;
    display: flex;
    justify-content: center;
    background-color: ${greyBackgroundColor};
    position: absolute;
    top: 950px;
`;

const ContextWrapper = styled.div`
    margin-top: 80px;
    margin-bottom: 65px;
`;

const TitleWrapper = styled.div`
    font-size: 32px;
    color: ${textPurpleColor};
    font-weight: 800;
    font-family: Helvetica, sans-serif;
    text-align: start;
    letter-spacing: -3px;
    margin-bottom: 40px;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;


const ArticleSection = () => {
    return (
        <Container>
            <ContextWrapper>
                <TitleWrapper>Latest articles for you</TitleWrapper>
                <ContentWrapper>
                    <TileOneCard />
                    <div style={{marginLeft: 23}}>
                        <TileTwoCard />
                        <div style={{display:"flex", justifyContent:"space-between", marginTop: 23}}> 
                            <TileThreeCard />
                            <TileFourCard />
                        </div>
                    </div>
                </ContentWrapper>
            </ContextWrapper>
        </Container>
    )
}

export default ArticleSection;