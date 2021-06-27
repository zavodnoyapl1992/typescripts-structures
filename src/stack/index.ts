'use strict'

export default class Stack<T>
{
    private data: T[] = []
    private length: number = 0

    public push(value: T): void
    {
        this.data.push(value)
        ++this.length
    }

    public pop(): T|undefined
    {
        if (this.length > 0) {
            --this.length
        }

        return this.data.pop()
    }

    public peek(): T|undefined
    {
        return this.data[this.length - 1]
    }

    public isEmpty() :boolean
    {
        return this.length == 0
    }
}
