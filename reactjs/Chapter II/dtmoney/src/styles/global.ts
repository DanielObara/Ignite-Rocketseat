import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: #f0f2f5;
		--red: #e52e4d;
		--green: #33cc95;
		--blue: #5429cc;
		--blue-light: #6933ff;
		--text-title: #363f5f;
		--text-body: #969cb3;
		--background: #f0f2f5;
		--shape: #ffff;
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	/* font-size de 16px é bom para Desktop */
	// REM = 1rem = font-size 
	html {
		@media (max-width: 1080px){
			font-size: 93.75%; //15px
		}
		
		@media(max-width: 720px){
			font-size: 87.75%; //14px
		}
	}

	body {
	 background: var(--background);
	 -webkit-font-smoothing: antialiased;	
	}
	
	body, input, textarea, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400px;
	}
	
	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600;
	}
	
	button {
		cursor: pointer;
	}
	
	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
	
	.react-modal-overlay{
		background: rgba(0,0,0,0.5);
		position: fixed;
		bottom: 0;
		top: 0;
		left:0;
		right:0;
		
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.react-modal-content{
		width: 100%;
		max-width: 576px;
		background: var(--background);
		padding: 3rem;
		position: relative;
	}
	.react-modal-close {
		position: absolute;
		right: 1.5rem;
		top: 1.5rem;
		border: 0;
		background: transparent;

		transition: filter 0.2s;

		&:hover{
			filter: brightness(0.8)
		}
	}
`;