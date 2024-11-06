const request = require('supertest');

test('Deve retornar erro 404 ao buscar por facções, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/factions/');
    
    expect(resposta.status).toBe(404);
});