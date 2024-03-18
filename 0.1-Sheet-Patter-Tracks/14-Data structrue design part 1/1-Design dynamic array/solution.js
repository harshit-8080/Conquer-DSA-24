class DynamicArray {
  constructor() {
    this.capacity = 3;
    this.index = 0;
    this.array = new Array(this.capacity);
  }

  add(value) {
    if (this.index == this.capacity) {
      let temp = this.array;
      this.capacity = this.capacity * 2;
      this.array = new Array(this.capacity);

      this.array = [...temp];
    }

    this.array[this.index] = value;
    this.index++;
  }

  print() {
    for (let i = 0; i < this.index; i++) {
      console.log(this.array[i]);
    }
  }
}

const o1 = new DynamicArray();

// o1.print();

o1.add(10);
o1.add(20);
o1.add(30);

o1.print();

o1.add(40);
o1.add(40);
o1.add(40);
o1.add(40);
o1.add(40);
o1.add(40);
o1.add(40);
o1.add(40);
o1.add(40);
o1.add(40);
o1.add(40);

o1.print();
