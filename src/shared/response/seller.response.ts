import { GenericResponse } from '@/shared/response/generic-response';

export class SellerResponse extends GenericResponse {
  _sellerName: string;

  get sellerName(): string {
    return this._sellerName;
  }

  set sellerName(value: string) {
    this._sellerName = value;
  }
}
