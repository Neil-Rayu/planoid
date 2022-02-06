import { type Writable, writable } from 'svelte/store';

interface Range {
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
}

interface hasTodo {
  date: Date;
  hasTodo: boolean;
}
interface Todo {
  name: string;
  importantFlag: boolean;
  urgentFlag: boolean;
  idNum: number;
  id: string;
  urgentImportantId: string;
  backburnerId: string;
  range: Range;
  date: Date;
}

export const todoData: Writable<Todo[]> = writable([]);
export const pageData = writable('');
export const settingToggle = writable(false);
export const startEndData = writable({ start: 8, end: 20 });
export const chunkData: Writable<string[]> = writable([]);
export const dateHasTodo: Writable<hasTodo[]> = writable([]);

export function addTodo(todo: Todo): void {
  todoData.update(($todoData) => {
    $todoData = [...$todoData, todo];
    return $todoData;
  });
}

export function toggleSettings(): void {
  settingToggle.update(($settingToggle) => {
    $settingToggle = !$settingToggle;
    return $settingToggle;
  });
}

export function addDate(todoDate: Date, todo: Todo): void {
  todoData.update(($todoData) => {
    todo.date = todoDate;
    return $todoData;
  });
}

export function toggleImportantFlag(todo: Todo): void {
  todoData.update(($todoData) => {
    todo.importantFlag = !todo.importantFlag;
    return $todoData;
  });
}

export function toggleUrgentFlag(todo: Todo): void {
  todoData.update(($todoData) => {
    todo.urgentFlag = !todo.urgentFlag;
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

export function insertChunk(range: Range): void {
  chunkData.update(($chunkData) => {
    if (range.startMin == 0) {
      $chunkData[range.startHour - 1] = `${range.startHour}:00-${range.endHour}`;
    } else {
      $chunkData[range.startHour - 2] = `${range.startHour - 1}:00-${range.startHour}:${
        range.startMin
      }`;
      $chunkData[
        range.startHour - 1
      ] = `${range.startHour}:${range.startMin}-${range.endHour}:${range.endMin}`;
      $chunkData[range.startHour] = `${range.endHour}:${range.endMin}-${range.endHour + 1}:00`;
    }
    return $chunkData;
  });
}

export function setRange(range: Range, todo: Todo): void {
  console.log(range);
  todoData.update(($todoData) => {
    todo.range = range;
    return $todoData;
  });
}

export function setHasDate(date: Date): void {
  dateHasTodo.update(($dateHasTodo) => {
    if ($dateHasTodo.at($dateHasTodo.findIndex((t) => t.date === date)) == null) {
      $dateHasTodo = [...$dateHasTodo, { date: date, hasTodo: true }];
    }
    return $dateHasTodo;
  });
}
