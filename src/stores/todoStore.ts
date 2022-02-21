import type { Todo, Range } from 'src/types';
import { type Writable, writable } from 'svelte/store';

export const todoData: Writable<Todo[]> = writable([]);
export const pageData = writable('');
export const settingToggle = writable(false);
export const startEndData = writable({ start: 8, end: 20 });
export const chunkData: Writable<{ time: string; todo: Todo }[]> = writable([]);

export function persist(name: string, user: any): void {
  const url = 'http://localhost:3000/timeMgmt';

  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);

  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');

  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState === 4) {
  //     console.log(xhr.responseText);
  //   }
  // };

  const data = `{
    "name": "${name}",
    "user": "${user}"
  }`;

  xhr.send(data);
  console.log(data);
}

export function addTodo(name: string): void {
  todoData.update(($todoData) => {
    const idNumber = $todoData.length > 0 ? $todoData.at(-1).idNum + 1 : 0;
    const todoId = 'main-todo-' + idNumber;

    $todoData = [
      ...$todoData,
      {
        name: name,
        idNum: idNumber,
        id: todoId
      }
    ];
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

export function addDays(todoDays: number[], todo: Todo): void {
  todoData.update(($todoData) => {
    todo.days = todoDays;
    return $todoData;
  });
}

export function setRecEvent(todo: Todo): void {
  todoData.update(($todoData) => {
    todo.reocurringEvent = true;
    return $todoData;
  });
}
export function toggleImportantFlag(todo: Todo): void {
  todoData.update(($todoData) => {
    todo.importantFlag = !todo.importantFlag;
    console.log(todo.importantFlag);
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
    //$startEndData = $startEndData;
    return $startEndData;
  });
}

export function setChunkList(chunkList: { time: string; todo: Todo }[]): void {
  chunkData.update(($chunkData) => {
    $chunkData = chunkList;
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

export function insertChunk(todos: Todo[]): void {
  chunkData.update(($chunkData) => {
    let start: number;
    let end: number;
    const unsubscribe = startEndData.subscribe(($startEndData) => {
      start = $startEndData.start;
      end = $startEndData.end;
    });
    let t = 0;
    const length = todos.length;
    for (let i = start; i < end; i++) {
      if (t < length && todos.at(t).range.startHour < i) {
        $chunkData[i - 1 - start] = {
          time: `${i - 1}:00-${todos[t].range.startHour}:${todos[t].range.startMin}`,
          todo: null
        };
        $chunkData[i - start] = {
          time: `${todos[t].range.startHour}:${todos[t].range.startMin}-${todos[t].range.endHour}:${todos[t].range.endMin}`,
          todo: todos[t]
        };
        $chunkData.splice(i - start + 1, 0, {
          time: `${todos[t].range.endHour}:${todos[t].range.endMin}-${i + 1}:00`,
          todo: null
        });
        t++;
      }
    }
    unsubscribe;
    return $chunkData;
  });
}

// export function setHasDate(date: Date): void {
//   dateHasTodo.update(($dateHasTodo) => {
//     if ($dateHasTodo.at($dateHasTodo.findIndex((t) => t.date === date)) == null) {
//       $dateHasTodo = [...$dateHasTodo, { date: date, hasTodo: true }];
//     }
//     return $dateHasTodo;
//   });
// }

// export function addRecEvent(rEvent: reocurringEvent): void {
//   recEventData.update(($recEventData) => {
//     $recEventData = [...$recEventData, rEvent];
//     return $recEventData;
//   });
// }

//let t = 0;

//export const recEventData: Writable<reocurringEvent[]> = writable([]);
// export function addTodo(todo: Todo): void {
//   todoData.update(($todoData) => {
//     $todoData = [...$todoData, todo];
//     return $todoData;
//   });
// }
