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
  searchMode: boolean = false;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.route.snapshot.paramMap.has('keyword')) {
      this.handleSearchProducts();
    }

    else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
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

  handleSearchProducts() {
    const searchKeyword = this.route.snapshot.paramMap.get('keyword')!;

    this.productService.searchProducts(searchKeyword).subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
