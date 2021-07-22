import { getCharacter } from "../base/snapshot";
import rick from '../base/data/rick.json'

describe('Es hora de las instantaneas', () => {
    it('Should be a Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    })
    it('Deberia fallar la instantanea', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20)
        }
        expect(user).toMatchSnapshot();
    })
    
    it('Should be have an exception inside the code', () => {
        const user = {
            createdAt: new Date(),
            id: Math.floor(Math.random() * 20),
            name: 'LeBron James',
          };
        
          expect(user).toMatchSnapshot({
            createdAt: expect.any(Date),
            id: expect.any(Number),
          });
    })
});