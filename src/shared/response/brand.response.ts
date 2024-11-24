import { GenericResponse } from '@/shared/response/generic-response';

export class BrandResponse extends GenericResponse {
  _brandName: string;

  get brandName(): string {
    return this._brandName;
  }

  set brandName(value: string) {
    this._brandName = value;
  }
}
