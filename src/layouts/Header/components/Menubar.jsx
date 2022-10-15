import styled from 'styled-components';

import { color } from '../../../styles/Variables';
import { NavList } from '../../../constants/navItem';
import { RegisterList } from '../../../constants/register';
import { useState } from 'react';

const { textColor, textWhiteColor } = color;

const NavContainer = styled.div`
    display: flex;
	align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 48px;
`;

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 450px;
`;

const NavItem = styled.a`
    color: ${textWhiteColor};
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownButton = styled.button`
    background-color:transparent;
    border: none;
    margin-right: 20px;
    color: ${textWhiteColor};
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`;

const DropdownContent = styled.ul`
    visibility: ${props => props.show ? "visible" : "hidden"};
    opacity: ${props => props.show ? 1 : 0};
    position: absolute;
    right: 0px;
    top: 28px;
    padding: 12px;
    width: 190px;
    background-color: #f9f9f9;
    box-shadow: -3px 3px 6px rgb(0 0 0 / 40%);
    z-index: 1;
    transition: all 0.3s ease-in-out;
    &::after {
        content: " ";
        position: absolute;
        top: -12px;
        right: 36px;
        width: 0;
        border-bottom: 12px solid #fff;
        border-right: 12px solid rgba(0,0,0,0);
        border-left: 12px solid rgba(0,0,0,0);
        font-size: 0;
        line-height: 0;
    }
`;

const DropdownItem = styled.li`
    color: ${textColor};
    text-align: start;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    cursor: pointer;
    list-style: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Menubar = () => {
    const [show, setShow] = useState(false);
	return (
        <NavContainer>
            <NavWrapper>
                { NavList.map(item => 
                    <NavItem key={item.key}>
                        {item.item}
                    </NavItem>) 
                }
                <DropdownWrapper>
                    <DropdownButton onClick={e => setShow(!show)}>Register</DropdownButton>
                    <DropdownContent show={show}>
                        { RegisterList.map(item => 
                            <DropdownItem key={item.key}>
                                {item.item}
                            </DropdownItem>) 
                        }
                    </DropdownContent>
                </DropdownWrapper>
            </NavWrapper>
        </NavContainer>
	);
};

export default Menubar;