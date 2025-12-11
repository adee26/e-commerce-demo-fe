import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../../services/product-category-service';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-categories',
  standalone: false,
  templateUrl: './product-categories.html',
  styleUrl: './product-categories.css',
})
export class ProductCategories implements OnInit {

  productCategories: ProductCategory[] = [];

  constructor(private productCategoryService: ProductCategoryService) {}

  ngOnInit(): void {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productCategoryService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
      }
    )
  }

}
