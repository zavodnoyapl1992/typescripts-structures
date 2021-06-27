import List from './index'


test('checkCurrent', () => {
    const list = new List<number>([1, 2, 3])
    expect(list.current()).toBe(1)
})

test('checkNext', () => {
    const list = new List<number>([1, 2, 3])
    expect(list.next()).toBe(true)
    expect(list.current()).toBe(2)
})

test('checkNextNotExists', () => {
    const list = new List<number>([1])
    expect(list.next()).toBe(false)
    expect(list.current()).toBe(1)
})

test('checkPrev', () => {
    const list = new List<number>([1, 2, 3])
    expect(list.next()).toBe(true)
    expect(list.prev()).toBe(true)
    expect(list.current()).toBe(1)
})

test('checkNextPrevNotExists', () => {
    const list = new List<number>([1])
    expect(list.prev()).toBe(false)
    expect(list.current()).toBe(1)
})

test('checkEmpty', () => {
    const list = new List<number>([])
    expect(list.next()).toBe(false)
    expect(list.prev()).toBe(false)
    expect(list.current()).toBe(undefined)
})


test('checkIterate', () => {
    const list  = new List<number>([1, 2, 3]) as any
    let i = 0
    for (let num of list) {
        expect(num).toBe(++i)
    }
})

test('checkIterateAfterNext', () => {
    const list  = new List<number>([1, 2, 3]) as any
    list.next()
    let i = 1
    for (let num of list) {
        expect(num).toBe(++i)
    }
})
