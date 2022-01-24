<script>
	import TodoHolder from '../components/TodoHolder.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import TaskInput from '../components/TaskInput.svelte';
	import Topbar from '../components/Topbar.svelte';
	let urgentImportantTitle = 'Urgent & Important';
	let backburnerTitle = 'Backburner (Important, but not Urgent)';
	let topbarHeading = 'Spaghetti';
</script>

<svelte-head>
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
</svelte-head>

<main>
	<div class="app-wrapper">
		<Topbar bind:topbarHeading />
		<div class="bottom-content">
			<Sidebar />
			<div class="main-content">
				<TaskInput />
				<div class="task-lists">
					<TodoHolder bind:title={urgentImportantTitle} />
					<TodoHolder bind:title={backburnerTitle} />
				</div>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	.app-wrapper {
		font-family: 'Ubuntu', sans-serif;
		color: white;
		display: flex;
		height: 100vh;
		margin-top: 0px;
		padding-top: 0px;
		flex-direction: column;
	}
	.bottom-content {
		display: flex;
		height: 100%;
		.main-content {
			width: 100%;
			display: flex;
			align-items: flex-start;
			.task-lists {
				display: flex;
				flex-direction: column;
				height: 98%;
				width: 100%;
			}
		}
	}
	:global {
		body {
			margin: 0;
			background-color: #121212;
		}
		Sidebar {
			width: 100%;
		}
		@media (max-width: 1024) {
			Sidebar {
				width: 0%;
			}
		}
	}
</style>
