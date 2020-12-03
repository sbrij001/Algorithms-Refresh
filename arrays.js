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

  shiftItems(index){
    // this loop will shift all the items to the right
    for( i=index; i < this.length; i++ ){
      this.data[i] = this.data[i+1];
    }
    // this delete method will delete the last item to prevent duplicate items when shifting items to the right
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArray = new MyArray();