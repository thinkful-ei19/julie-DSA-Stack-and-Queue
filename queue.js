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

function peek(queue) {
    console.log(queue.first.value);
    return queue.first.value
}

function display(queue){
    let node = queue.first;
    while(node !== queue.last) {
        console.log(node.value);
        node = node.prev;
    }
    
}

function main() {
    let starTrekQ = new Queue();
        starTrekQ.enqueue('Kirk');
        starTrekQ.enqueue('Spock');
        starTrekQ.enqueue('Uhura');
        starTrekQ.enqueue('Sulu');
        starTrekQ.enqueue('Checkov');
        // console.log(starTrekQ);
        // peek(starTrekQ);
        starTrekQ.dequeue();
        starTrekQ.dequeue();
        display(starTrekQ);
}

main();


    //queue of objects, create stack for queue
    //loop through stack and create another stack from there
    //then queue is in order because it flips itself
    //loop and pop those values and push them into another stack
    //the stack will be right order




function queueUsingStack(stack) {
    let node = stack.top;
    let QueueStack = new Stack();
    while (node !== null) {
      QueueStack.push(stack.pop());
      node = node.next;
    }
    return QueueStack;
  }
  
  console.log(queueUsingStack(stack));