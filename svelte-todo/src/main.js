import App from './App.html';
import store from './TodoStore.js';

const app = new App({
	target: document.body,
	data: {
		message: 'todo app',
	},
	store
});

window.app = app;

export default app;
