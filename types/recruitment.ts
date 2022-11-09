import { SurveyType } from "./survey";

export type Recruitment = {
  recruitmentId: string;
  recruitmentName: string;
  recruitmentDescription: string;
  recruitmentDeadline: Date;
  surveyType: SurveyType;
  __v: number;
  _id: string;
};
