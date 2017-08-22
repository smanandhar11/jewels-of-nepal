class GalleryController {
  constructor() {
    this.showMobFilter = false;
  }

  changeValue(name, value) {
    this[name] = value;
  }

  menuClick() {
    this.showMobFilter = !this.showMobFilter;
    console.log(this.showMobFilter);
  }
}

export default GalleryController;
