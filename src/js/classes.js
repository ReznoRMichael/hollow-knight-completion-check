/* This file will contain all classes */
export class ItemListBox {

  constructor() {
    console.log("ItemListBox is created");
  }

  assignElements(worldData) {
    this.worldData = worldData; /* array of .id */
  }

}


export class DataChecker {

  constructor(saveFile, section) {
    this.saveFile = saveFile;
    this.section = section;
    this.entries = section.entries;
    this.playerData = saveFile.playerData;
    this.boolData = saveFile.sceneData.persistentBoolItems;
    this.geoRocksData = saveFile.sceneData.geoRocks;
  }

}