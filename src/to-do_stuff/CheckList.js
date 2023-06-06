import { CheckListItem } from "./CheckListItem.js";

class CheckList {
  constructor() {
    this.list = [];
  }

  add(description) {
    this.list.push(new CheckListItem(description, this.list.length));
  }

  delete(id) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].getId() === id) {
        this.list.splice(i, 1);
        this.changeIdStartingFrom(i);
      }
    }
  }

  log() {
    this.list.forEach((item) => console.log(item.toString()));
  }

  toArray() {
    return this.list;
  }

  check(id) {
    this.list = this.list.forEach((item) => {
      if (item.getId() === id) {
        item.toggleIsChecked();
      }
    });
  }

  changeIdStartingFrom(id) {
    for (let i = id; i < this.list.length; i++) {
      this.list[i].bumpIdDownOne();
    }
  }
}

export { CheckList };
