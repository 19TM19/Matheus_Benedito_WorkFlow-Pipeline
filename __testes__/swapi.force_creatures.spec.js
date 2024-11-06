const request = require('supertest');

test('Deve retornar erro 404 ao buscar por criaturas da Força, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/force_creatures/');
    
    expect(resposta.status).toBe(404);
});