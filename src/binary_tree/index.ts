'use strict'

export default class BinaryTree<T>
{
    public parent: BinaryTree<T>|undefined

    public left: BinaryTree<T>|undefined

    public right: BinaryTree<T>|undefined

    public value: T

    public key: number

    constructor(values: T[], index: number = 0)
    {
        this.key = index
        this.value = values[index]
        index = index*2 + 1
        if (values.length > index) {
            this.left = new BinaryTree<T>(values, index)
            this.left.parent = this

        }
        if (values.length > (index + 1)) {
            this.right = new BinaryTree<T>(values, index + 1)
            this.right.parent = this
        }
    }
}
