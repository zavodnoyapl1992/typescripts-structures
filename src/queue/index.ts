'use strict'
import Stack from "../stack"

export default class Queue<T>
{
    private stackOne: Stack<T>

    private stackTwo: Stack<T>

    constructor() {
        this.stackOne = new Stack<T>()
        this.stackTwo = new Stack<T>()
    }

    public enqueue(value: T): void
    {
        if (!this.stackOne.isEmpty()) {
            this.stackTwo.push(this.stackOne.pop())
        }

        this.stackOne.push(value)
    }

    public dequeue(): T|undefined
    {
        if (this.isEmpty())  {
            return undefined
        }
        if (this.stackTwo.isEmpty()) {
            this.stackTwo.push(this.stackOne.pop())
        }

        return this.stackTwo.pop()
    }

    public isEmpty(): boolean
    {
        return this.stackOne.isEmpty() && this.stackTwo.isEmpty()
    }
}
