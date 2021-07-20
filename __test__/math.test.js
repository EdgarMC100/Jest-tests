import {sumar, restar, multiplicar, dividir } from '../base/math'

describe('Calculos matematicos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1,1)).toBe(2);
    })

    test('Prueba de resta', () => {
        expect(restar(1,1)).toBe(0);
    })

    test ('Prueba de multiplicacion', () => {
        expect(multiplicar(1,1)).toBe(1)
    })

    test('Prueba de division', () => {
        expect(dividir(1,1)).toBe(1)
    })
})