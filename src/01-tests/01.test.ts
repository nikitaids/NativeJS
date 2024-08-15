import {towerBuilder} from './01';

test('function towerBuilder is correct' , ()=>{

    const res1 = towerBuilder(1)
    const res2 = towerBuilder(2)
    const res3 = towerBuilder(3)

    expect(res1).toStrictEqual(["*"])
    expect(res2).toStrictEqual([" * ","***"])
    expect(res3).toStrictEqual(["  *  "," *** ","*****"])

})