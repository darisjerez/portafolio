import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';


@Injectable()
export class ProductService {
   private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const prodId = new Date().toString().replace(/\s/g,'');
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts(){
        return [...this.products];
    }

    getSingleProduct(prodId: string){
        const product = this.products.find((prod)=> prod.id === prodId);
        if(!product){
            throw new NotFoundException("product not found!");
        }
        return { ...product };
    }
}