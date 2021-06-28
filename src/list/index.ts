'use strict'

export default class List<T>
{
    private readonly data: T[]

    private currentValue: T|undefined

    private readonly length: number;

    private currentIndex: number = 0

    constructor(data: T[])
    {
        this.data = data
        this.length = data.length
        this.currentValue = data[0] ?? undefined

        const self = this
        this[Symbol.iterator] =  () => ({
            next() {
                let current = self.current()
                return {
                    done: self.next(),
                    value: current
                };
            }
        })
    }

    public current(): T|undefined
    {
        return this.currentValue
    }

    public next(): boolean
    {
        const newIndex = this.currentIndex + 1
        if (newIndex < this.length) {
            this.currentIndex = newIndex
            this.currentValue = this.data[this.currentIndex]

            return true
        }

        return false
    }

    public prev(): boolean
    {
        const newIndex = this.currentIndex - 1
        if (newIndex >= 0) {
            this.currentIndex = newIndex
            this.currentValue = this.data[this.currentIndex]

            return true
        }

        return false
    }
}
