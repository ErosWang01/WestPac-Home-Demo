import styled from 'styled-components';

import { color } from '../../../styles/Variables';
import { CategoryList } from '../../../constants/categories';
import Logo from '../../../assets/Westpac-Logo.png';
import LoginSearch from './LoginSearch';
import Search from './Search';

const { textColor, borderColor, primaryColor } = color;

const NavContainer = styled.div`
    display: flex;
	align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 72px;
    position: relative;
`;

const NavWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 50px;
    padding-left: 25px; 
    border-left: 1px solid ${borderColor};
`;

const NavItem = styled.li`
    color: ${textColor};
    font-size: 18px;
    font-weight: 500;
    padding-top: 24px;
    padding-bottom: 19px;
    border-bottom: 3px solid transparent;
    list-style: none;
    cursor: pointer;
    &:hover {
        border-bottom: 3px solid ${primaryColor};
    }
    &:first-child {
        border-bottom: 3px solid ${primaryColor};
    }
`;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 414px;
`;

export const LogoWrapper = styled.div`
    justify-content: center;
    align-items: center;
    width: 69px;
    margin: 0px 86px;
    cursor: pointer;
`;

const Logobar = () => {
	return (
        <NavContainer>
            <div style={{display:"flex", alignItems: "center"}}>
                <LogoWrapper><img src={Logo} alt="ligtht-color logo"/></LogoWrapper>
                <NavWrapper>
                    { CategoryList.map(item => 
                        <NavItem key={item.key}>
                            {item.item}
                        </NavItem>) 
                    }
                </NavWrapper>
            </div>
            <SearchWrapper>
                <LoginSearch />
                <Search />
            </SearchWrapper>
        </NavContainer>
	);
};

export default Logobar;