import { ProductCategoryModel } from './ProductCategoryModel';

export class Products {
  productID: number;
  productTitle: string;
  thumbnailFilename: string;
  productCategory: ProductCategoryModel;
}
