export class Product {
    id: any;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

constructor(id=0, name='', description='', price=0, imageUrl='https://images-na.ssl-images-amazon.com/images/I/71CuwgwCQdL._SL1500_.jpg'){
this.id=id
this.name= name
this.description = description
this.price = price
this.imageUrl = imageUrl
}
}
