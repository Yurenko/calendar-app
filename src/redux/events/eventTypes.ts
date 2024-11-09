export interface Events {
  date: string
  title: string
  description: string
  location: string
  startTime: Date
  type: EVENT_TYPE
}

export enum EVENT_TYPE {
  EXPERT = 'Meeting with an expert',
  QUESTION_ANSWER = 'Question-answer',
  CONFERENCE = 'Conference',
  WEBINAR = 'Webinar'
}
