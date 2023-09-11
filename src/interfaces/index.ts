export interface IClient {
  id?: string;
  name: string;
  username: string;
  password: string;
  isAdm: boolean;
  city: string;
  state: string;
  postal_code: string;
  address: string;
  phone_number: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IReportRequest {
  title: string;
  id?: string;
  generationDate: string;
  description: string;
  img?: string[];
  subject: string;
  client_id?: string;
  table: string[];
  title_table: string;
  decription_table: string;
}

export interface IReportExibition {
  title: string;
  generationDate: string;
  description: string;
  img?: string[];
  subject: string;
  id?: string;
}

export interface IReportPDFQuery {
  client_id?: string;
}

export interface IAdminRequest {
  name: string;
  id?: string;
  username: string;
  password: string;
  isAdm: boolean;
}

export interface IFunctionFilterReport {
  text: string;
  date: string;
}
