import expect from 'expect'
import { generateMessage } from './message'

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'test admin'
        const text = 'this is a test'
        const res = generateMessage(from, text)

        expect(typeof res.createdAt).toBe('number')

        expect(res).toMatchObject({
            from,
            text
        })
    })
})