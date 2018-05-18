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
        // display(starTrek);
        // console.log(JSON.stringify(starTrek));
}


main();

//push nodes into stack, each pop, compare to first letter of string as long as not false
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let stack = new Stack();
    let checkStack = false;
    for(let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }
    for(let i = 0; i < s.length; i++) {
        if(s[i] === stack.pop()) {
            checkStack = true;
        } else {
            checkStack = false;
        }
    }
    return checkStack;

}

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function matchingParen(string) {
    //only need one stack
    let openStack = new Stack();
    let closedStack = new Stack();
    let openParens=0;
    let closedParens=0;
    for (let i = 0; i < string.length; i++ ) {
        if (str[i] === '(') {
            openStack.push(i)
            openParens++;
        } else if (str[i] === ')') {
            closedStack.push(i)
            closedParens++;
        }
    } 
    if (openParens === closedParens) {
        return true;
    } else if (openParens > closedParens) {
        const val = openStack.pop()
        return `Extra: ${val}`
    } else if (openParens < closedParens) {
        const val = closedStack.pop()
        return `Extra: ${val}`
    }
 

}

console.log(matchingParen((2)+(2)));