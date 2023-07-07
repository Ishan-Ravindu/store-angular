import { Component } from '@angular/core';
import { enumToList } from '../helpers/enumToList';
import { Color, Size, ProductCategory } from "../config/enum";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  public colorList: Array<Color>;
  public sizeList: Array<Size>;
  public productCategoryList: Array<ProductCategory>;

  constructor() {
    this.colorList = enumToList(Color);
    this.sizeList = enumToList(Size);
    this.productCategoryList = enumToList(ProductCategory);
    console.log(this.colorList);
    console.log(this.sizeList);
    console.log(this.productCategoryList);
  }
}
