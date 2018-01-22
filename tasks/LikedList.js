class LinkedList {
    constructor(...args) {
        this.head = {};

        args.forEach(arg => this.add(arg));
       
    }
    add(data) {
       if(!this.head) {
            this.head = new ListItem(data);
            return;
       }
       let current = this.head;
       while(current.next) {
            current = current.next;
       }
       current.next = new ListItem(data);
    }
    has(item) {
        let current = this.head;
        let res = false;
        while(current) {
            if(current.data == item) return true;
            current = current.next;
        }
        return false;
    }
};

class ListItem {
    constructor(data) {
        this.data = data;
    }
}

export default LinkedList;