/** TreeNode: node for a general tree. */

class TreeNode {
	constructor (val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor (root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues () {
		if (this.root === null) return 0;

		let total = 0;

		const sum = (node) => {
			for (let child of node.children) {
				total += child.val;
				if (child.children.length > 0) {
					sum(child);
				}
			}
		};
		sum(this.root);
		return this.root.val + total;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens () {
		if (this.root === null) return 0;

		let count = 0;

		const evens = (node) => {
			for (let child of node.children) {
				child.val % 2 === 0 ? count++ : count;
				if (child.children.length > 0) {
					evens(child);
				}
			}
		};
		evens(this.root);
		return this.root.val % 2 === 0 ? this.root.val + count : count;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

	numGreater (lowerBound) {
	
}

// module.exports = { Tree, TreeNode };

let n = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n6 = new TreeNode(6);
let n7 = new TreeNode(7);
let n8 = new TreeNode(8);

n.children = [ n2, n3, n4 ];

n4.children.push(n5, n6);
n6.children.push(n7);
n7.children.push(n8);

largeTree = new Tree(n);

// console.log(largeTree); // Tree { root: TreeNode { val: 1, children: [ [TreeNode] ] } }
// console.log(smallTree.root); // TreeNode { val: 1, children: [ TreeNode { val: 2, children: [] } ] }
// console.log(smallTree.root.val); // 1
// console.log(smallTree.root.children); // [ TreeNode { val: 2, children: [] } ]
// console.log(smallTree.sumValues());

console.log(largeTree.numGreater(0)); // 8
console.log(largeTree.numGreater(4)); // 4
console.log(largeTree.numGreater(8)); // 0
