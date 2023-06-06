class CheckListItem {
  constructor(description, id) {
    this.description = description;
    this.isChecked = false;
    this.id = id;
  }

  getId() {
    return this.id;
  }

  getDescription() {
    return this.description;
  }

  getIsChecked() {
    return this.isChecked;
  }

  setDescription(desc) {
    this.description = desc;
  }

  toggleIsChecked() {
    if (this.isChecked) {
      this.isChecked = false;
    } else {
      this.isChecked = true;
    }
  }

  bumpIdDownOne() {
    this.id = this.id - 1;
  }

  toString() {
    return this.description + ", " + this.isChecked + ", " + this.id;
  }
}

export { CheckListItem };
