import { Store } from 'svelte/store.js';


// helpers
const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

const genuid = () => {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};


class TodoStore extends Store {

	addTask(name) {
		const task = {
			id: genuid(),
			name: name,
			done: false,
		}
		const tasks = [...this.get().tasks, task];
		this.set({ tasks });
	}

	toggleTask(id) {
		const tasks = this.get().tasks.map(task => {
			if (task.id === id) {
				return {
					id: id,
					name: task.name,
					done: !task.done,
				};
			}
			return task;
		});
		this.set({ tasks });
	}

	removeTask(id) {
		const tasks = this.get().tasks.filter(task => task.id !== id);
		this.set({ tasks });
	}

}


const store = new TodoStore({
	tasks: [],
});

export default store;
