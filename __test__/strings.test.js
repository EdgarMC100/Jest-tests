describe('Comprobar cadenas de texto', () => {
    const text = 'Beautiful text'
    test('Debe contener el siguiente texto', () => {
        expect(text).toMatch(/Beautiful/)
    })
    test('No debe contener el siguiente texto', () => {
        expect(text).not.toMatch(/Hola/)
    })
    test('Comprobar el tamanio de un texto', () => {
        expect(text.length).toBe(14)
        expect(text).toHaveLength(14)
    })
})