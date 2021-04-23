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
		if (this.root === null) return 0;

		let count = 0;

		const greater = (node) => {
			for (let child of node.children) {
				child.val > lowerBound ? count++ : count;
				if (child.children.length > 0) {
					greater(child);
				}
			}
		};
		greater(this.root);
		return this.root.val > lowerBound ? this.root.val + count : count;
	}
}

module.exports = { Tree, TreeNode };
