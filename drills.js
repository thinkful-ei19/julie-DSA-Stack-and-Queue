class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) { //stack is empty, data will be top of stack
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top); //top has something, create new node 
        this.top = node; //add data to new node and pointer point to top
    }

    pop() {
        const node = this.top; //point to next item 
        this.top = node.next; //that will become top of stack
        return node.data;
    }

}

function peek(stack) {
    console.log(stack.top.data)
    return stack.top.data;        
}

function display(stack) {
    console.log(stack.top)
    return stack.top;
}


function main() {
    let starTrek = new Stack();
        starTrek.push('Kirk');
        starTrek.push('Spock');
        starTrek.push('McCoy');
        starTrek.push('Scotty');
        display(starTrek);
        console.log(JSON.stringify(starTrek));
}



main();


function is_palindrome() {
    //push nodes into stack, each pop, compare to first letter of string as long as not false
}