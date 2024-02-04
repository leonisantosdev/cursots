class F {
  protected x = 10;
}

class G extends F {
  showX() {
    console.log(`X: ${this.x}`);
  }
}

const gInstance = new G();
console.log(gInstance.showX())