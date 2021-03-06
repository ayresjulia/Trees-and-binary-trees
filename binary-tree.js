/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
	constructor (val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor (root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

	minDepth () {
		if (this.root === null) return 0;

		const shortest = (node) => {
			if (node.left === null && node.right === null) return 1;
			if (node.left === null) return shortest(node.right) + 1;
			if (node.right === null) return shortest(node.left) + 1;
			return Math.min(shortest(node.left), shortest(node.right)) + 1;
		};

		return shortest(this.root);
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

	maxDepth () {
		if (this.root === null) return 0;

		const longest = (node) => {
			if (node.left === null && node.right === null) return 1;
			if (node.left === null) return longest(node.right) + 1;
			if (node.right === null) return longest(node.left) + 1;
			return Math.max(longest(node.left), longest(node.right)) + 1;
		};

		return longest(this.root);
	}

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum () {
		let total = 0;
		const max = (node) => {
			if (node === null) return 0;
			const leftSum = max(node.left);
			const rightSum = max(node.right);
			total = Math.max(total, node.val + leftSum + rightSum);
			return Math.max(0, leftSum + node.val, rightSum + node.val);
		};
		max(this.root);
		return total;
	}

	/** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

	nextLarger (lowerBound) {
		if (!this.root) return null;

		let queue = [ this.root ];
		let closest = null;

		while (queue.length) {
			let current = queue.shift();
			if (current.val > lowerBound && (current.val < closest || closest === null)) {
				closest = current.val;
			}
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}
		return closest;
	}
}

module.exports = { BinaryTree, BinaryTreeNode };
