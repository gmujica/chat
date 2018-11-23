import { MetaComponent } from '@rebelstack-io/metaflux';

class header extends MetaComponent {
	render () {
		const content = document.createElement('div');
		content.className = 'meta-header-content';
		this.loginArea = document.createElement('div');
		this.loginArea.className = 'loginArea';
		content.appendChild(this.loginArea);
		this.loginButton = document.createElement('button');
		this.loginButton.textContent = '....';
		this.button1 = document.createElement('button');
		this.button1.textContent = 'Login';
		this.button2 = document.createElement('button');
		this.button2.textContent = 'Register';
		this.optionsDiv = document.createElement('div');
		content.appendChild(this.optionsDiv);
		this.loginButton.addEventListener('click', () => {
			this.optionsDiv.appendChild(this.button1);
			this.optionsDiv.appendChild(this.button2);
		});
		this.loginArea.appendChild(this.loginButton);
		return content;
	}
}

window.customElements.define('meta-header', header);
