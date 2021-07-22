import { getDataFromApi } from "../base/promise";

describe('Probar Async/Await', () => {
    test('Realizar una peticion a una api', async () => {
        const api = 'https://rickandmortyapi.com/api/character/'
        const rickApi= 'https://rickandmortyapi.com/api/character/1'
        await getDataFromApi(api).then(data =>{
            expect(data.results.length).toBeGreaterThan(0)
        })
 
        await getDataFromApi(rickApi).then(data =>{
            expect(data.name).toEqual('Rick Sanchez')
        })
    })

    test('Realizando una peticion a una api con error 404', async ()=>{
        let api = 'http://httpstat.us/404'
        const result = getDataFromApi(api)
        await expect(result).rejects.toEqual(Error('Request failed with status code 404'))
    })

    test('Realizando una peticion a una api con error 500', async () => {
        let api = 'http://httpstat.us/500'
        try{
            await getDataFromApi(api)
        }catch(error){
            expect(error).toEqual(new Error('Request failed with status code 500'))
        }
    })
});