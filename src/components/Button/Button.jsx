import styled, { css }  from "styled-components";
import { color } from "../../styles/Variables";

const { primaryColor, whiteColor, textColor, shadowColor, buttonHoverColor } = color;

const buttonTheme = (theme) => {
	switch (theme) {
		case 'primary':
			return css`
				background-color: ${primaryColor};
				color: ${whiteColor};
                box-shadow: 0 0 20px 0 ${shadowColor};
				font-weight: bold;
                :hover {
                    background-color: ${buttonHoverColor};
                    color: ${whiteColor};
                }
			`;
		case 'white':
			return css`
				background-color: ${whiteColor};
				color: ${textColor};
                box-shadow: 0 0 20px 0 ${shadowColor};
                :hover {
                    background-color: ${buttonHoverColor};
                    color: ${whiteColor};
                }
			`;
		default:
			return css`
				background-color: ${primaryColor};
				color: ${whiteColor};
                box-shadow: 0 0 20px 0 ${shadowColor};
                :hover {
                    background-color: ${buttonHoverColor};
                    color: ${whiteColor};
                }
			`;
	}
};

const StyledButton = styled.button`
	align-items: center;
	border: none;
	border-radius: 3px;
	display: inline-flex;
    font-size: 16px;
	justify-content: center;
	outline: none;
	padding: 10px 15px;
	white-space: nowrap;
    cursor: pointer;
	${({ theme }) => buttonTheme(theme)};

	&:hover {
		transition: 0.2s;
	}
`;

const Button = props => {
	const { onClick, children, theme = 'primary' } = props;
	return (
		<StyledButton
			theme={theme}
			onClick={onClick}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
