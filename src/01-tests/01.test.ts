import {sum} from './01';

test('sum slould be correct',()=>{

    const a = 1
    const b = 2
    const c = 3

    const res = sum(a,b)

    expect(res).toBe(3)
})