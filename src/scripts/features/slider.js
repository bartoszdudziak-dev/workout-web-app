class Slider {
  constructor(time = 6000) {
    this.slider = document.querySelector('.slider');
    this.images = document.querySelectorAll('.slider__img');
    this.time = time;
    this.currentImage = 0;
    this.maxImage = this.images.length;
    this._goToImage(0);
  }

  // Initialization
  init() {
    setInterval(() => {
      if (this.currentImage === this.maxImage - 1) this.currentImage = 0;
      else this.currentImage++;
      this._goToImage(this.currentImage);
    }, this.time);
  }

  _goToImage(imgToDisplay) {
    this.images.forEach((img, i) => {
      img.style.transform = `translateX(${100 * (i - imgToDisplay)}%)`;
    });
  }
}

export default new Slider();
