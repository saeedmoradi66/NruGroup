import { MembersModel } from './MembersModel';
import { ItemStatus } from '../Enums/ItemStatus';
export class NewsModel {
  /**
   *
   */
  constructor() {
    this.members = new MembersModel();
  }
  newsId: number;
  title: string;
  description: string;
  createDate: Date;
  newsPersianDate: string;
  newsImage: string;
  itemStatus: ItemStatus;
  members: MembersModel;
}
