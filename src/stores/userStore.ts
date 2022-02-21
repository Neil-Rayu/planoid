import { writable } from 'svelte/store';

export const userStore = writable<{
  isLoggedIn: boolean;
  user?: any;
}>({ isLoggedIn: false });
