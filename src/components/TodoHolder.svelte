<script>
	import Todo from './Todo.svelte';
	import { todoData } from '../stores/todoStore.js';

	export let title;
</script>

<div class="todo-container">
	<span class="title">{title}</span>
	<hr style="width: 100%;" />
	{#if $todoData}
		{#each $todoData as todo}
			<Todo
				bind:todoText={todo.name}
				bind:todoId={todo.id}
				bind:todoImportantFlag={todo.importantFlag}
				bind:todoUrgentFlag={todo.urgentFlag}
			/>
		{/each}
	{/if}
</div>

<style lang="scss">
	.todo-container {
		--background: rgba(255, 255, 255, 0.05);
		--width: 50%;
		--height: 50%;
		--border-radius: 10px;
		background: var(--background);
		width: var(--width);
		height: var(--height);
		border-radius: var(--border-radius);
		position: relative;
		padding: 30px 45px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 2%;
		margin-right: 2%;
	}
</style>
