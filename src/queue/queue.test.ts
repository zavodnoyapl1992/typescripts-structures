import Queue from './index'

test('checkQueue', () => {
    const queue = new Queue<number>()
    expect(queue.isEmpty()).toBe(true)
    queue.enqueue(1)
    expect(queue.isEmpty()).toBe(false)
    queue.enqueue(2)
    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
    expect(queue.isEmpty()).toBe(true)
})
