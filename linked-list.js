function Node(value) {
  this.data = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.insert = function(value) {
  var node = new Node(value);

  if (this.head === null) {
    this.head = node;
    return node;
  }

  var current = this.head;

  this.head = node;
  node.next = current;
  return node;
};

LinkedList.prototype.visit = function() {
  var current = this.head;

  while (current !== null ) {
    console.log(`${current.data}`);
    current = current.next;
  }
};

LinkedList.prototype.findNthFromBeginning = function(n) {
  var current = this.head;

  if (current === null) {
    return null
  } else if (n === 0) {
    return current.data;
  }

  for (i = 0; i < n; i++ ) {
    current = current.next;
  }

  return current.data;
};

LinkedList.prototype.insertAscending = function(value) {
  var current = this.head;
  var new_node = new Node(value);

  if (current === null) {
    this.head = new_node;
  } else if (value <= current.data) {
    new_node.next = current;
    this.head = new_node;
  }

  while (current !== null) {
    if (current.data < value && current.next === null) {
      current.next = new_node;
      return
    } else if (current.data < value && current.next.data >= value) {
      var temp = current.next;
      current.next = new_node;
      new_node.next = temp;
      return
    }
    current = current.next;
  }
  return;
};

LinkedList.prototype.length = function() {
    var current = this.head,
      count = 0;

    if (current === null) {
      return 0;
    }

    while (current !== null) {
       count++;
       current = current.next;
    }

    return count;
};

LinkedList.prototype.findMin = function() {
  var current = this.head,
    min = current.data;

  if (current.next === null) {
    return min.data;
  }

  while (current !== null) {
    if (current.data < min) {
      min = current.data;
    }
    current = current.next;
  }
  return min;
};

LinkedList.prototype.findMax = function() {
  var current = this.head,
    max = current.data;

  if (current.next === null) {
    return max.data;
  }

  while (current !== null) {
    if (current.data > max) {
      max = current.data;
    }
    current = current.next;
  }
  return max;
};

myLinkedList = new LinkedList();

// # Add some values to the linked list
console.log("Adding 5, 3 and 1 to the linked list.");
console.log(myLinkedList.insert(5));
console.log(myLinkedList.insert(3));
console.log(myLinkedList.insert(1));

console.log("Printing elements in the linked list:");
myLinkedList.visit();

console.log("Confirming values in the linked list using find_nth_from_beginning method.");
var value = myLinkedList.findNthFromBeginning(2);
if (value !== 5) console.log(`BUG: Value at index 2 should be 5 and is ${value}`);
value = myLinkedList.findNthFromBeginning(1);
if (value !== 3) console.log(`BUG: Value at index 1 should be 3 and is ${value}`);
value = myLinkedList.findNthFromBeginning(0);
if (value !== 1) console.log(`BUG: Value at index 0 should be 1 and is ${value}`);

console.log("Printing elements in the linked list:");
myLinkedList.visit();

console.log("Adding 4 in ascending order.");
myLinkedList.insertAscending(4);

console.log("Checking values by calling find_nth_from_beginning method.");
value = myLinkedList.findNthFromBeginning(2);
if (value !== 4) console.log("BUG: Value at index 2 should be 4 and is #{value}");
value = myLinkedList.findNthFromBeginning(3);
if (value !== 5) console.log("BUG: Value at index 3 should be 5 and is #{value}" );
value = myLinkedList.findNthFromBeginning(1);
if (value !== 3) console.log("BUG: Value at index 1 should be 3 and is #{value}" );


// # Insert ascending
console.log("Adding 6 in ascending order.");
myLinkedList.insertAscending(6);

// # print all elements
console.log("Printing elements in the linked list:");
myLinkedList.visit();

// # vaidate length
console.log("Confirming length of the linked list.");
var myLinkedListLength = myLinkedList.length();
if (myLinkedListLength !== 5) console.log(`BUG: Length should be 5 and not ${myLinkedListLength}`);

// # find min and max
console.log("Confirming min and max values in the linked list.");
var min = myLinkedList.findMin();
if (min !== 1) console.log(`BUG: Min value should be 1 and not ${min}`);

var max = myLinkedList.findMax();
if (max !== 6) console.log(`BUG: Max value should be 6 and not ${max}`);

// # delete value
// puts "Deleting node with value 5 from the linked list."
// my_linked_list.delete(5)
// # print all elements
// puts "Printing elements in the linked list:"
// my_linked_list.visit
// # validate length
// puts "Confirming length of the linked list."
// my_linked_list_length = my_linked_list.length
// puts "BUG: Length should be 4 and not #{my_linked_list_length}" if my_linked_list_length !== 4
//
// # delete value
// puts "Deleting node with value 1 from the linked list."
// my_linked_list.delete(1)
// # print all elements
// puts "Printing elements in the linked list:"
// my_linked_list.visit
// # validate length
// puts "Confirming length of the linked list."
// my_linked_list_length = my_linked_list.length
// puts "BUG: Length should be 3 and not #{my_linked_list_length}" if my_linked_list_length !== 3
//
//
// # find middle element
// puts "Confirming middle value in the linked list."
// middle = my_linked_list.find_middle_value
// puts "BUG: Middle value should be 4 and not #{middle}" if middle !== 4
//
// # reverse the linked list
// puts "Reversing the linked list."
// my_linked_list.reverse
// # print all elements
// puts "Printing elements in the linked list:"
// my_linked_list.visit
// # verify the reversed list
// puts "Verifying the reversed linked list by calling find_nth_from_beginning method."
// value = my_linked_list.find_nth_from_beginning(2)
// puts "BUG: Value at index 2 should be 3 and is #{value}" if value !== 3
// value = my_linked_list.find_nth_from_beginning(1)
// puts "BUG: Value at index 1 should be 4 and is #{value}" if value !== 4
// value = my_linked_list.find_nth_from_beginning(0)
// puts "BUG: Value at index 0 should be 6 and is #{value}" if value !== 6
//
// # nth from the end
// puts "Verifying find_nth_from_end method."
// value = my_linked_list.find_nth_from_end(0)
// puts "BUG: Value at index 0 from the end, should be 3 and is #{value}" if value !== 3
// value = my_linked_list.find_nth_from_end(1)
// puts "BUG: Value at index 1 from the end, should be 4 and is #{value}" if value !== 4
// value = my_linked_list.find_nth_from_end(2)
// puts "BUG: Value at index 2 from the end, should be 6 and is #{value}" if value !== 6
//
// # checking search function
// puts "Searching for node with value 6"
// puts "BUG: Should be true" if my_linked_list.search(6) == false
// puts "Searching for node with value 0"
// puts "BUG: should be false" if my_linked_list.search(0) == true
//
// # check for cycle
// puts "Checking the linked list for cycle."
// puts "BUG: Should not have a cycle." if my_linked_list.has_cycle
//
// # create cycle and then test for it
// puts "Creating a cycle in the linked list."
// my_linked_list.create_cycle
// puts "Checking the linked list for cycle."
// puts "BUG: Should not have a cycle." if !(my_linked_list.has_cycle)
