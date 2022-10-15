import styled from 'styled-components';
import { color } from '../../styles/Variables';
import ServiceCard from './components/ServiceCard';

const { whiteColor } = color

const ServiceBlock = styled.section`
    position: absolute; 
    width: 100%;
    top: 510px;
    margin: 0 auto;
    padding: 70px 0;
    border: none;
    background-color: ${whiteColor};
`;

const Content = styled.div`
	margin: 0 auto;
	max-width: 1020px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    grid-gap: 16px;
`;

const CompanySection = () => {
    return(
        <ServiceBlock>
            <Content>
                <Grid>
                    <ServiceCard />
                </Grid>
            </Content>
        </ServiceBlock>

    )
}

export default CompanySection;