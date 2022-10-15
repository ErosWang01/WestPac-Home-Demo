import styled from "styled-components";
import { useState } from 'react';
import { SuggestList } from "../../../constants/suggest";
import { color } from "../../../styles/Variables";
import SearchIcon from "../../../assets/search-13-24.png";
import DeleteIcon from "../../../assets/x-mark-24.png";

const { textColor, whiteColor, textGreyColor, greyBackgroundColor, borderColor } = color;

const DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownButton = styled.button`
    background-color:transparent;
    border: none;
    color: ${textGreyColor};
    background-color: ${greyBackgroundColor};
    height: 72px;
    width: 66px;
    border-left: 1px solid ${borderColor};
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
    top: 56px;
    padding: 12px 20px;
    width: 285px;
    height: ${window.innerHeight};
    background-color: ${whiteColor};
    box-shadow: -3px 3px 6px rgb(0 0 0 / 40%);
    z-index: 1;
    transition: all 0.3s ease-in-out;
`;

const DropdownItem = styled.li`
    color: ${textColor};
    text-align: start;
    font-size: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${borderColor};
    cursor: pointer;
    list-style: none;
    &:hover {
        background-color: ${greyBackgroundColor};
    }
    &:last-child {
        border: none;
        margin-bottom: 500px;
    }
`;

const Search = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <DropdownWrapper>
                <DropdownButton onClick={e => setShow(!show)}>
                   {show ?  <img src={DeleteIcon} alt="search"/> : <img src={SearchIcon} alt="search"/>} 
                </DropdownButton>
                <DropdownContent show={show}>
                    { SuggestList.map(item => 
                        <DropdownItem key={item.key}>
                            {item.item}
                        </DropdownItem>) 
                    }
                </DropdownContent>
            </DropdownWrapper>
        </div>
    )
};

export default Search;