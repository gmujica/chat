/*
	Container where all sections of the app merge
*/
import '../containers/main-container'

document.addEventListener('DOMContentLoaded', () => {
	const container = document.createElement('main-container');
	document.body.appendChild(container);
})
