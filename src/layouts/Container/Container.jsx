import styled from 'styled-components';
import { color } from '../../styles/Variables';

const { greyBackgroundColor, whiteColor } = color;

const SessionContainer = styled.section`
	background-color: ${props => (props.gray ? greyBackgroundColor : whiteColor)};
`;

const Content = styled.div`
	margin: 0 auto;
	max-width: 1020px;
	padding: 20px 0;
`;

const Container = props => {
	const { children, gray = false } = props;
	return (
		<SessionContainer gray={gray}>
			<Content>{children}</Content>
		</SessionContainer>
	);
};

export default Container;