import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list-grid.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products: Product[] = [];
  currentCateogryId: number = 1;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    //check if 'id' param is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId) {
        //get the 'id' param string
        this.currentCateogryId = +this.route.snapshot.paramMap.get('id')!;
    }

    this.productService.getProductList(this.currentCateogryId).subscribe(
      data => {
        this.products = data;
      }
    );
  }

}
