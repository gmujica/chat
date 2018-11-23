import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/visitorView';

class MainContainer extends MetaContainer {
	render () {
		const content = document.createElement('div');
		content.id = 'container';
		const visitor = document.createElement('visitor-view');
		content.appendChild(visitor);
		return content;
	}
}

window.customElements.define('main-container', MainContainer);
