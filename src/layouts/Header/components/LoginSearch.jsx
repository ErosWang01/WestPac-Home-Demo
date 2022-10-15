import styled from "styled-components";
import { color } from "../../../styles/Variables";
import Button from "../../../components/Button/Button";

const { textColor } = color;

const SelectWrapper = styled.div`
    border-radius: 3px;
    position: relative;
    &:after {
        position: absolute;
        top: 44%;
        right: 12px;
        z-index: 0;
        content: " ";
        margin-left: 6px;
        display: inline-block;
        border-top: 8px solid #181b25;
        border-right: 7px solid transparent;
        border-bottom: none;
        border-left: 7px solid transparent;
    }
    .form-select {
        z-index: 1;
        background: transparent;
        appearance: none;
        text-indent: 0.01px;
        text-overflow: '';
        height: 36px;
        color: ${textColor};
        font-size: 16px;
        font-weight: 400;
        padding: 0 36px 0 8px;
        border: 1px solid #dedee1;
        border-radius: 3px;
        transition: border .2s ease;
    }

    option {
        font-weight: normal;
        display: block;
        white-space: nowrap;
        min-height: 1.2em;
        padding: 0px 2px 1px;
    }
`;

const ButtonWrapper = styled.div`
    margin-left: 13px;
    margin-right: 25px;
`;

const LoginSearch = () => {
    return (
        <div style={{display:"flex"}}>
            <SelectWrapper>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Online Banking - Personal</option>
                    <option value="Online Banking - Business">Online Banking - Business</option>
                    <option value="Corporate Online">Corporate Online</option>
                    <option value="Westpac Share Trading">Westpac Share Trading</option>
                    <option value="WinTrade">WinTrade</option>
                    <option value="Westpac Digital Connect">Westpac Digital Connect</option>
                    <option value="View all online services">View all online services</option>
                </select>
            </SelectWrapper>
            <ButtonWrapper>
                <Button theme = 'primary'>Sign in</Button>
            </ButtonWrapper>
        </div>
    )
}

export default LoginSearch;