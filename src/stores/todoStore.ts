import { type Writable, writable } from 'svelte/store';

interface Todo {
  name: string;
  importantFlag: boolean;
  urgentFlag: boolean;
  idNum: number;
  id: string;
  urgentImportantId: string;
  backburnerId: string;
}

export const todoData: Writable<Todo[]> = writable([]);
export const pageData = writable('');
export const settingToggle = writable(false);
export const startEndData = writable({ start: 8, end: 20 });
export const dateData = writable([]);
export const chunkData: Writable<string[]> = writable([]);

export function addTodo(todo: Todo): void {
  todoData.update(($todoData) => {
    $todoData = [...$todoData, todo];
    return $todoData;
  });
}

export function toggleSettings() {
  settingToggle.update(($settingToggle) => {
    $settingToggle = !$settingToggle;
    return $settingToggle;
  });
}

export function addDate(todoDate, todoId) {
  dateData.update(($dateData) => {
    $dateData = [...$dateData, { date: todoDate, id: todoId }];
    return $dateData;
  });
}

export function toggleImportantFlag(idNumber) {
  todoData.update(($todoData) => {
    $todoData.at(idNumber).importantFlag = !$todoData.at(idNumber).importantFlag;
    return $todoData;
  });
}

export function toggleUrgentFlag(idNumber) {
  todoData.update(($todoData) => {
    $todoData.at(idNumber).urgentFlag = !$todoData.at(idNumber).urgentFlag;
    return $todoData;
  });
}

export function setStartTime(startTime: number): void {
  startEndData.update(($startEndData) => {
    $startEndData.start = startTime;
    return $startEndData;
  });
}

export function setEndTime(endTime: number): void {
  startEndData.update(($startEndData) => {
    $startEndData.end = endTime;
    return $startEndData;
  });
}

export function setChunkList(chunkList: string[]): void {
  chunkData.update(($chunkData) => {
    $chunkData = chunkList;
    return $chunkData;
  });
}
