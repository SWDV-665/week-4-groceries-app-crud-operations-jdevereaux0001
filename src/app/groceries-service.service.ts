import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {
  getItems() {
    return this.items;
  }
  removeItem(_index: any) {
    this.items.splice(_index);
    throw new Error('Method not implemented.');
  }
  addItem(_item: any) {
    this.items.push(_item);
    throw new Error('Method not implemented.');
  }
  editItem(_item: any, _index: any) {
    this.items[_index] = _item;
    throw new Error('Method not implemented.');
  }

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 3
    },
    {
      name: "Eggs",
      quantity: 12
    },
    {
      name: "Cheese",
      quantity: 4
    },
  ];

  constructor() { }
}

function getItems(this: any) {
  return this.items;
}
function removeItem(this: any, index: any) {
  this.items.splice(index, 1);
  throw new Error('Function not implemented.');
}
function addItem(this: any, item: any) {
  this.items.push(item);
  throw new Error('Function not implemented.');
}
function editItem(this: any, item: any, index: any) {
  this.items[index] = item;
  throw new Error('Function not implemented.');
}
