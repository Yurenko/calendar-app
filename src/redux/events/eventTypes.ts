export interface MockData {
  [key: string]: Events[]
}

export interface Events {
  date: string
  title: string
  description: string
  location: string
  startTime: string
  type: string
}

export enum EVENT_TYPE {
  EXPERT = 'Meeting with an expert',
  QUESTION_ANSWER = 'Question-answer',
  CONFERENCE = 'Conference',
  WEBINAR = 'Webinar'
}
