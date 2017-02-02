class GuessingGame {
    constructor() {
        this.arr = [];
    }

    setRange(min, max) {
      for(var i=min;i<=max;i++){    
      this.arr[i] = i;    
      }
      return this;
    }

    guess() {
      var l = this.arr.length;
      var mid = Math.floor(l/2);
      return this.arr[mid];
    }

    lower() {
      var l = this.arr.length;
      var mid = Math.floor(l/2);
      this.arr = this.arr.slice(0,mid+1);
      return this;
    }

    greater() {
      var l = this.arr.length;
      var mid = Math.floor(l/2);
      this.arr = this.arr.splice(mid);
      return this;
    }
}

module.exports = GuessingGame;
