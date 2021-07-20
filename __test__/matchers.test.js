describe('Comparadores comunes', () => {
    const user = {
        name: "Edgar",
        lastname: "Morales"
    }

    const userExpect = {
        name: "Edgar",
        lastname: "Morales"
    }

    const userExpectNotEqual = {
        name: "Edgars",
        lastname: "Moraless"
    }

    test('UserExpect should be equal to user', () => {
        expect(userExpect).toEqual(user)
    })
    test('No son iguales',() => {
        expect(userExpectNotEqual).not.toEqual(user)
    })
})