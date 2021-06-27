import Queue from './index'

test('checkPriorityQueue', () => {
    const queue = new Queue<number>()
    expect(queue.isEmpty()).toBe(true)
    queue.enqueue(1, 1)
    expect(queue.isEmpty()).toBe(false)
    queue.enqueue(2, 10)
    queue.enqueue(3, 5)
    queue.enqueue(4, 5)
    expect(queue.dequeue()).toBe(2)
    expect(queue.dequeue()).toBe(3)
    expect(queue.dequeue()).toBe(4)
    expect(queue.dequeue()).toBe(1)
    expect(queue.isEmpty()).toBe(true)
})
