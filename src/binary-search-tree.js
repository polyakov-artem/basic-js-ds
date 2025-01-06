const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  #root = null;

  root() {
    return this.#root;
  }

  add(data) {
    const nodeLocation = this.getNodeLocation(data);
    const newNode = new Node(data);

    if (nodeLocation === null) {
      this.#root = newNode;
      return;
    }

    const { parentNode, foundNode, position } = nodeLocation;

    if (foundNode) {
      return;
    }

    parentNode[position] = newNode;
  }

  has(data) {
    return Boolean(this.find(data));
  }

  getNodeLocation(data) {
    if (this.#root === null) return null;

    let parentNode = this.#root;
    let foundNode = this.#root;
    let position;

    while (foundNode !== null) {
      if (data < foundNode.data) {
        position = "left";
      } else if (data > foundNode.data) {
        position = "right";
      } else {
        break;
      }

      parentNode = foundNode;
      foundNode = foundNode[position];
    }

    return { parentNode, foundNode, position };
  }

  find(data) {
    const nodeLocation = this.getNodeLocation(data);

    if (nodeLocation === null || nodeLocation.foundNode === null) return null;

    return nodeLocation.foundNode;
  }

  remove(data) {
    const nodeLocation = this.getNodeLocation(data);

    if (nodeLocation === null || nodeLocation.foundNode === null) return null;

    const { parentNode, foundNode, position } = nodeLocation;

    const leftBranch = foundNode.left;
    const rightBranch = foundNode.right;

    const leftBranchMaxNode = this.lastNode({
      startNode: leftBranch,
      position: "right",
    });

    let replacement;

    if (leftBranchMaxNode !== null) {
      leftBranchMaxNode.right = rightBranch;
      replacement = leftBranch;
    } else {
      replacement = rightBranch;
    }

    if (parentNode === foundNode) {
      this.#root = replacement;
    } else {
      parentNode[position] = replacement;
    }
  }

  lastNode({ position, startNode = this.#root }) {
    if (startNode === null) return null;

    let node = startNode;

    while (node[position]) {
      node = node[position];
    }

    return node;
  }

  min() {
    const lastNode = this.lastNode({ position: "left" });
    return lastNode?.data || null;
  }

  max() {
    const lastNode = this.lastNode({ position: "right" });
    return lastNode?.data || null;
  }
}

module.exports = {
  BinarySearchTree,
};
