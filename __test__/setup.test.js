afterEach(() => console.log('After each test'))
beforeEach(() => console.log('Before each test'))
afterAll(() => console.log('After all tests'))
beforeAll(() => console.log('Before all tests'))

describe('Prepare before execute', () => {
    test('Is true', () => {
        expect(true).toBeTruthy()
    })
    
})