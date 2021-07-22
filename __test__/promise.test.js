import { getDataFromApi } from "../base/promise";
// import "regenerator-runtime/runtime";
describe('Probando promesas', () => {
    const api = 'https://rickandmortyapi.com/api/character/'
    test('Realizando una peticion a una api con then', (done) =>{
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0)
            done()
        })
    })
    
    test('Realizando una peticion a una api con asinc/await',async () => {
        const {results} = await getDataFromApi(api)
        expect(results.length).toBeGreaterThan(0)
    })

    test('Realizando una peticion a una api con new jest improvement',()=>{
        return getDataFromApi(api).then(data=> {
            expect(data.results.length).toBeGreaterThan(0)
        })
    })
    test('Resuleve un Hi!', () => {
        return expect(Promise.resolve('Hi!')).resolves.toBe('Hi!')
    })
    test('Rechaza con un error', () => {
        return expect(Promise.reject('Error')).rejects.toBe('Error')
    })

})