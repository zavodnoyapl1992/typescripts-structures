'use strict'
import Queue from "../queue"

type QueueList<T> = {
    [key: number]: Queue<T>;
};

export default class PriorityQueue<T>
{
    private listQueue: QueueList<T> = {}

    private readonly defaultPriority: number

    private length: number = 0

    private priorities: number[] = []


    constructor(defaultPriority: number = 0) {
        this.defaultPriority = defaultPriority
    }

    public enqueue(value: T, priority?: number): void
    {
        if (priority == undefined) {
            priority = this.defaultPriority
        }
        if (this.priorities.indexOf(priority) == -1) {
            this.priorities.push(priority)
        }


        if (!this.listQueue[priority]) {
            this.listQueue[priority] = new Queue<T>()
        }

        this.listQueue[priority].enqueue(value)
        ++this.length
    }

    public dequeue(): T|undefined
    {
        if (this.isEmpty()) {
            return undefined
        }
        const maxIndex =  Math.max.apply(Math, this.priorities)

        const value = this.listQueue[maxIndex].dequeue()

        if (this.listQueue[maxIndex].isEmpty())  {
            delete this.listQueue[maxIndex]
            this.priorities.splice(this.priorities.indexOf(maxIndex), 1)
        }
        --this.length

        return value
    }

    public isEmpty(): boolean
    {
        return this.length == 0
    }
}
