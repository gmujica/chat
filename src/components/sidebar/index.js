/*
	This component is the sidebar where each of the firebase visitors are loaded to chat with them
*/
import { MetaComponent } from '@rebelstack-io/metaflux';
import '../sendinput';

class MetaSideBar extends MetaComponent {
	render () {
		/* general container */
		const content = document.createElement('div');
		this.content.className = 'generalDiv';
		/* side container (users) */
		this.divSideBar = document.createElement('div');
		this.divSideBar.className = 'divSideBar';
		this.listItem = document.createElement('a');
		this.listItem.className = 'listItem';
		this.listItem.textContent = ''; // get function
		this.listItem = document.createElement('a');
		this.listItem.className = 'listItem';
		this.listItem.textContent = ''; // get function
		this.listItem = document.createElement('a');
		this.listItem.className = 'listItem';
		this.listItem.textContent = ''; // get function
		content.appendChild(this.listItem);
		return content;
	}
}

window.customElemnets.define('meta-side-bar', MetaSideBar);
