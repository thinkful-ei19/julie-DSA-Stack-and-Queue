class _Node {
    constructor(value) {
        this.value=value,
        this.next=null,
        this.prev=null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {  //if the queue is empty
            this.first = node; //make the node the first node on the queue
        }
        if (this.last) { //if there is something on the queue already
            node.next = this.last; //then take the node that is currently at the end of the queue
            this.last.prev = node; //and link it to the new node
        }
        this.last = node; //make the new node the last item on the queue
    }
    dequeue() {
        if (this.first === null) { //if the queue is empty, there is nothing to return
            return;
        }
        const node = this.first; //make first item on the queue to be the item
        this.first = node.prev; //that is next on line the item after the current first item
        if (node === this.last) { //if this is the last item in the queue
            this.last = null;
        } 

        return node.value;
    
    }
}
