// Implementing an Array

class MyArray{
  constructor(){
    // super();
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(element){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length-1];
    delete lastItem;
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
  }
}

const newArray = new MyArray();