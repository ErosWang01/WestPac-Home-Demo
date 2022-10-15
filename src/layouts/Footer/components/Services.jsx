import styled from 'styled-components';
import Column from './Column';
import { color } from '../../../styles/Variables';
import { FooterItemListOne, FooterItemListTwo, FooterItemListThree, FooterItemListFour } from '../../../constants/footeritem';

const { borderColor } = color;

const ServiceWrapper = styled.div`
    width: 1100px;
    padding:20px 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${borderColor};
`;

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    border-left: 1px solid ${borderColor};
    &:first-child {
        border: none;
    }
`;

const Services = () => {
    return (
        <ServiceWrapper>
            <ColumnWrapper>
                {FooterItemListOne.map(item => 
                    <Column key={item.key} link={item.item} />
                )}
            </ColumnWrapper>
            <ColumnWrapper>
                {FooterItemListTwo.map(item => 
                    <Column key={item.key} link={item.item} />
                )}
            </ColumnWrapper>
            <ColumnWrapper>
                {FooterItemListThree.map(item => 
                    <Column key={item.key} link={item.item} />
                )}
            </ColumnWrapper>
            <ColumnWrapper>
                {FooterItemListFour.map(item => 
                    <Column key={item.key} link={item.item} />
                )}
            </ColumnWrapper>
        </ServiceWrapper>
    )
}

export default Services;