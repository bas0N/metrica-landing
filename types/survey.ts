import { Recruitment } from "./recruitment";

export enum SurveyStatus {
  FILLED,
  PENDING,
  DRAFT,
}

export enum SurveyType {
  FRONTEND,
  BACKEND,
  UXUI,
  DEVOPS,
}
export type Survey = {
  _id: string;
  createdBy: string;
  recipientEmail: string;
  candidateFirstName: string;
  candidateLastName: string;
  surveyStatus: SurveyStatus;
  recruitment: Recruitment;
  terminationDate: Date;
  creationDate: Date;
  __v: 0;
};
