import { callbackHell } from "../base/callbacks";

describe('Probando un callback', () => {
    test('Callback', (done) => {
        function otherCallback(data){
            expect(data).toBe('Hi')
            done()
        }
        callbackHell(otherCallback)
    })
})