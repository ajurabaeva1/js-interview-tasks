class BinarySearchTree {
    constructor() {
        this._head = null;
        this._size = 0;
    }
    add(...values) {
        values.forEach(value => {
            if(this._head === null) {
                this._head = new TreeNode(value);
            } else {
                this._recursiveAdd(this._head, value);
            }
            this._size++;
        });
    }
    has(value) {
        return this._find(value) != null;
    }
    remove(value) {
        this._head = this._recursivRemove(this._head, value);
        this._size--;
    }
    size() {
        return this._size;
    }
    _recursiveAdd(node, value) {
        if(value < node.value) {
            if(node.left === null) {
                node.left = new TreeNode(value);
                return;
            } else {
                return this._recursiveAdd(node.left, value);
            }
        } else if (value > node.value) {
            if(node.right === null) {
                node.right = new TreeNode(value);
                return;
            } else {
                return this._recursiveAdd(node.right, value);
            }
        } else {
            return null;
        }
    }
    _find(value) {
        let current = this._head;
        while(current.value !== value) {
            if(value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
            if(current === null) {
                return null;
            }
        }
        return current;
    }
    _recursivRemove(node, value) {
        if(node == null) {
            return null;
        }
        if(value == node.value) {
            if(node.left == null && node.right == null) {
                return null;
            }
            if(node.left == null) {
                return node.right;
            }
            if(node.right == null) {
                return node.left;
            }

            let tmp = node.right;
            while(tmp.left !== null) {
                tmp = tmp.left;
            }
            node.value = tmp.value;
            node.right = this._recursivRemove(node.right, value);
            return node;
        } else if (value < node.value) {
            node.left = this._recursivRemove(node.left, value);
            return node;
        } else {
            node.right = this._recursivRemove(node.right, value);
            return node;
        }
    }
}

class TreeNode{
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export default BinarySearchTree;