class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
//Function to Reverse a LinkedList
const reverseLinkedList = (head) => {
    let curr = head;   // Current node starts at the head
    let prev = null;   // Previous node is initially null

    while (curr) {
        let temp = curr.next; // Store the next node
        curr.next = prev;     // Reverse the pointer (current node points to previous)
        prev = curr;          // Move prev to the current node
        curr = temp;          // Move curr to the next node in the original list
    }

    return prev; // New head of the reversed list
};

// Helper function to convert an array to a linked list
const arrayToLinkedList = (arr) => {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
};

// Helper function to print the linked list
const printLinkedList = (head) => {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
};

// Example usage:
let list = arrayToLinkedList([1, 2, 3, 4, 5]);
printLinkedList(list); // Output: 1 -> 2 -> 3 -> 4 -> 5

let reversedList = reverseLinkedList(list);
printLinkedList(reversedList); // Output: 5 -> 4 -> 3 -> 2 -> 1
