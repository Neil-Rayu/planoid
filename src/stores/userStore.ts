import type { Firestore } from 'firebase/firestore';
import { writable } from 'svelte/store';

export const userStore = writable<{
  isLoggedIn: boolean;
  user?: any;
  database?: Firestore;
}>({ isLoggedIn: false });
