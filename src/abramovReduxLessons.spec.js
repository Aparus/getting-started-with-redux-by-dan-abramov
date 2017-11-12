import { counter } from './abramovReduxLessons'

test('Counter reducer ', () => {
    expect(counter(0, { type: 'INCREMENT' })).toBe(1)
    expect(counter(1, { type: 'INCREMENT' })).toBe(2)
    expect(counter(2, { type: 'DECREMENT' })).toBe(1)
    expect(counter(0, { type: 'DECREMENT' })).toBe(-1)
    expect(counter(undefined, {})).toBe(0)

})