/* This file will contain all classes and functions for creating things on the page */
export class ItemListBox {

  constructor() {
    console.log("ItemListBox is created");
  }

  assignElements(worldData) {
    this.worldData = worldData; /* array of .id */
  }

}