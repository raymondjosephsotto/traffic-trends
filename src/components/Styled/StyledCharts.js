import styled from 'styled-components';

export const StyledCharts = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	padding: 2vh 0.6vw 0 4vw;
	.card {
		min-width: 340px;
		max-width: 600px;
		margin: 10px;
		border-radius: 12px;
		padding: 12px;
	}
	.flexItem3 {
		flex-grow: 2;
		max-width: 1250px;
	}
	@media screen and (max-width: 897px) {
		padding: 10%;
	}
`;
