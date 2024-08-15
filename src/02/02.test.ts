import {student} from './02'

test('object student is correct', () => {

    expect(student.name).toBe('Nikita')
    expect(student.technologies[1].title).toBe('CSS')

})