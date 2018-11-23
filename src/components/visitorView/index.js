/*
	In this view you will find the components that a simple visitor will see when the chat is added in a web page
*/
import { MetaComponent } from '@rebelstack-io/metaflux';
import '../../css/visitorView/layout.css';

class visitorView extends MetaComponent {
	render () {
		const content = document.createElement('div');
		this.popup = document.createElement('div');
		this.popup.className = 'popupContainer';
		content.appendChild(this.popup);
		this.div0 = document.createElement('div');
		this.div0.className = 'div0';
		this.chatButton = document.createElement('button');
		this.chatButton.className = 'chatButton';
		this.chatButton.textContent = 'Chat';
		this.chatButton.addEventListener('click', () => {
			document.getElementsByClassName('chatButton')[0].style.display = 'none';
			document.getElementsByClassName('popupContainer')[0].style.display = 'block';
		});
		this.div0.appendChild(this.chatButton);
		content.appendChild(this.div0);
		/* */
		this.formContainer = document.createElement('div');
		this.formContainer.className = 'formContainer';
		/* */
		this.chatContainer = document.createElement('div');
		this.chatContainer.className = 'chatContainer';
		this.chatContainerT = document.createElement('textarea');
		this.chatContainerT.className = 'messajeTextArea';
		this.chatContainer.appendChild(this.chatContainerT);
		this.textMessage = document.createElement('p');
		this.textMessage.className = 'tm';
		// this.chatContainer.appendChild(this.textMessage); //  muestra el texto general en el contenedor
		this.chatContainerT.appendChild(this.textMessage); // coloca el texto en el contenedor del textArea pero solo se ve por el inspector
		content.appendChild(this.chatContainer);
		this.popup.appendChild(this.chatContainer);
		this.formContainer.appendChild(this.chatContainer);
		/* */
		this.textAreaContainer = document.createElement('div');
		this.textAreaContainer.className = 'txtAContainer';
		this.textArea = document.createElement('textarea');
		this.textArea.placeholder = '  your message...';
		this.textArea.className = 'textArea';
		this.textAreaContainer.appendChild(this.textArea);
		content.appendChild(this.textAreaContainer);
		this.popup.appendChild(this.textAreaContainer);
		this.formContainer.appendChild(this.textAreaContainer);
		/* */
		this.buttonContainer = document.createElement('div');
		this.buttonContainer.className = 'btnContainer';
		this.sendButton = document.createElement('button');
		this.sendButton.textContent = 'Send';
		this.sendButton.className = 'btn';
		this.sendButton.addEventListener('click', () => {
			const messageContent = document.createElement('p');
			const textNode = document.createTextNode(this.textArea.value);
			messageContent.appendChild(textNode);
			this.textMessage.appendChild(messageContent);
			this.textArea.value = '';
		});
		this.buttonContainer.appendChild(this.sendButton);
		/* */
		this.closeButton = document.createElement('button');
		this.closeButton.textContent = 'Close';
		this.closeButton.className = 'btn-cancel';
		this.closeButton.addEventListener('click', () => {
			document.getElementsByClassName('popupContainer')[0].style.display = 'none';
			document.getElementsByClassName('chatButton')[0].style.display = 'block';
		});
		this.buttonContainer.appendChild(this.closeButton);
		/* */
		content.appendChild(this.buttonContainer);
		this.formContainer.appendChild(this.buttonContainer);
		content.appendChild(this.formContainer);
		this.popup.appendChild(this.formContainer);

		return content;
	}
}

window.customElements.define('visitor-view', visitorView);
