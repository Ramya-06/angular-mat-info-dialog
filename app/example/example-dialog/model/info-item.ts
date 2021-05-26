import { InfoType } from './info-type.enum';

export class InfoItem {
  public constructor(
    public id: string,
    public infoCategoryId: string,
    public infoTypeId: InfoType,
    public topic: string = '',
    public text: string = ''
  ) {}
}
