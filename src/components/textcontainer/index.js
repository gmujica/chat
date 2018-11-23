/*
	Container component of text exchange between user-operator
 */
import { MetaComponent } from '@rebelstack-io/metaflux';

class TextContainer extends MetaComponent {
	render () {
		const content = document.createElement('div');
		this.textContent = document.createElement('div');
		this.textContent.className = 'textContentExchange';
		return content;
	}
}

window.customElements.define('meta-text-container-component', TextContainer);
