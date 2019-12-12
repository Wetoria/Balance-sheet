class BalanceDetail {
  constructor(detail) {
    if (!detail) {
      this.name = undefined;
      this.amount = 0;
      this.key = 0;
      this.children = [];
    }
    this.convertObjectToDomainObject(detail);

    this.recountAmount = this.recountAmount.bind(this);
  }

  convertObjectToDomainObject = (detail) => {
    if (detail instanceof Object) {
      for (const [key, value] of Object.entries(detail)) {
        if (key === 'children') {
          this[key] = value.map((child) => {
            const childDetail = new BalanceDetail(child);
            childDetail.updateParentAmount = this.recountAmount;
            return childDetail;
          });
        } else {
          this[key] = value;
        }
      }
    }
  }

  addNewSubDetail = () => {
    if (!this.hasChildren) {
      this.children = [];
    }
    const { children } = this;
    const newSubDetail = new BalanceDetail();
    newSubDetail.key = this.generateKey(children.length);
    newSubDetail.updateParentAmount = this.recountAmount;
    children.push(newSubDetail);
  }

  removeChild = (target, rule = cur => (cur.key !== target.key)) => {
    if (!target) return;

    if (this.hasChildren) {
      this.children = this.children.filter(cur => rule(cur));
    }

    this.refreshChildrenKey();
  }

  refreshChildrenKey = () => {
    const { children } = this;
    if (this.notHasChildren) {
      this.amount = 0;
      return;
    }
    children.forEach((child, index) => {
      child.key = this.generateKey(index);
    });
  }

  recountAmount = (child) => {
    const diff = Number(child.amount || 0) - Number(child._lastAmount || 0);
    this.amount = (this.amount + diff).toFixed(2);
  }

  isParentOf(child) {
    return !!this.children.find(item => item.key === child.key);
  }

  generateKey = suffix => `${this.key}-${suffix}`

  // getters && setters
  get amount() {
    return this._amount;
  }

  set amount(val) {
    this._lastAmount = this._amount;
    this._amount = Number(val);
    if (this.updateParentAmount && this.updateParentAmount instanceof Function) {
      this.updateParentAmount(this);
    }
  }

  get hasChildren() {
    return this.children.length;
  }

  get notHasChildren() {
    return !this.hasChildren;
  }
}

export default BalanceDetail;
