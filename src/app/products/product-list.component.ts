import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    // The getter/setter cannot have the name that matches the property name
    // The general pattern is to name the internal properties just like a setter/getter only with the edition of an underscore
    // The property getter and setter work just like the simple property
    // When the data binding needs the value, it will call the getter and get the value
    // Every time the user modifies the value, the data binding calls the setter, passing in the changed value
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        // if there is a _listFilter value, performFilter(); is there is no filter, filteredProducts is the entire set of products
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    // The class constructor is a function that is executed when the component is first initialized
    // The best place to set default values for more complex properties is in the class constructor
    constructor(private productService: ProductService) {

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        // .indexOf() returns -1 if the searchValue is not found; !== -1 means it was found and passes the filter
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }
}
