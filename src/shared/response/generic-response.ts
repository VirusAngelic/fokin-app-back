import { GenericResponseInterface } from '@/shared/response/generic-response.interface';

export class GenericResponse {
  private _status: number;
  private _message: string;
  private _data: any;

  set status(status: number) {
    this._status = status;
  }

  set message(message: string) {
    this._message = message;
  }

  set data(data: any) {
    this._data = data;
  }
}
