export interface Range {
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
}

export interface Todo {
  name: string;
  importantFlag?: boolean;
  urgentFlag?: boolean;
  idNum: number;
  id: string;
  urgentImportantId?: string;
  backburnerId?: string;
  range?: Range;
  date?: Date;
  days?: number[];
  reocurringEvent?: boolean;
}
