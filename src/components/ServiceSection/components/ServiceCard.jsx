import styled from "styled-components";
import { color } from "../../../styles/Variables";
import HomeIcon from "../../../assets/home-loan-icon.svg";
import PigBankIcon from "../../../assets/PiggyBankIcon.svg";
import CreditCardIcon from "../../../assets/BankCardPictogram.svg";
import CarIcon from "../../../assets/CarPictogram.svg";
import HouseIcon from "../../../assets/business-icon.svg";
import SearchIcon from "../../../assets/SearchPictogram.svg";

const { textPurpleColor, primaryColor, textColor } = color;

const CardWrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

const LogoWrapper = styled.div`
    width: 60px;
    margin-right: 30px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
`;

const ServiceTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ServiceTitle = styled.div`
    font-weight: 800;
    font-size: 22px;
    color: ${textPurpleColor};
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const Arrow = styled.div`
        margin-left: 10px;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-top: 2px solid ${primaryColor};
        border-right: 2px solid ${primaryColor};
        transform: rotate(45deg);
`;

const ServiceSubTitle = styled.div`
    color: ${textColor};
    padding: 6px 0px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const services = [
    {
        logo: HomeIcon,
        title: <ServiceTitle>Home loans</ServiceTitle>,
        subtitle: 
        <div>
            <ServiceSubTitle>Fixed rate home loan</ServiceSubTitle>
            <ServiceSubTitle>Variable rate home loans</ServiceSubTitle>
            <ServiceSubTitle>Home loan calculators</ServiceSubTitle>
        </div>
    },
    {
        logo: PigBankIcon,
        title: <ServiceTitle>Bank accounts</ServiceTitle>,
        subtitle: 
        <div>
            <ServiceSubTitle>Transaction accounts</ServiceSubTitle>
            <ServiceSubTitle>Saving accounts</ServiceSubTitle>
            <ServiceSubTitle>Term deposit</ServiceSubTitle>
        </div>
    },
    {
        logo: CreditCardIcon,
        title: <ServiceTitle>Credit cards</ServiceTitle>,
        subtitle: 
        <div>
            <ServiceSubTitle>Rewards credit cards</ServiceSubTitle>
            <ServiceSubTitle>Low rate credit cards</ServiceSubTitle>
            <ServiceSubTitle>Low fee credit card</ServiceSubTitle>
        </div>
    },
    {
        logo: CarIcon,
        title: <ServiceTitle>Personal loans</ServiceTitle>,
        subtitle: 
        <div>
            <ServiceSubTitle>Unsecured personal loan</ServiceSubTitle>
            <ServiceSubTitle>Car loan</ServiceSubTitle>
            <ServiceSubTitle>Car loan calculator</ServiceSubTitle>
        </div>
    },
    {
        logo: HouseIcon,
        title: <ServiceTitle>Business</ServiceTitle>,
        subtitle: 
        <div>
            <ServiceSubTitle>Bank accounts</ServiceSubTitle>
            <ServiceSubTitle>Business loans</ServiceSubTitle>
            <ServiceSubTitle>EFTPOS & eCommerce</ServiceSubTitle>
        </div>
    },
    {
        logo: SearchIcon,
        title: <ServiceTitle>More options</ServiceTitle>,
        subtitle: 
        <div>
            <ServiceSubTitle>Share trading</ServiceSubTitle>
            <ServiceSubTitle>Insurance</ServiceSubTitle>
            <ServiceSubTitle>International & Travel</ServiceSubTitle>
        </div>
    }
];


const ServiceCard = () => {
    return (
        services.map(service => 
            <CardWrapper>
                <LogoWrapper>
                    <img src={service.logo} alt="company logo" />
                </LogoWrapper>
                <TextWrapper>
                    <ServiceTitleWrapper>
                        {service.title}
                        <Arrow />
                    </ServiceTitleWrapper>
                    {service.subtitle}
                </TextWrapper>
            </CardWrapper>
        )
    )
};

export default ServiceCard


