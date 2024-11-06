const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar por Endor (planeta 7)', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/7/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Endor');
    expect(resposta.body.rotation_period).toBe('18');
    expect(resposta.body.orbital_period).toBe('402');
    expect(resposta.body.diameter).toBe('4900');
    expect(resposta.body.climate).toBe('temperate');
    expect(resposta.body.gravity).toBe('0.85 standard');
    expect(resposta.body.terrain).toBe('forests, mountains, lakes');
    expect(resposta.body.surface_water).toBe('8');
    expect(resposta.body.population).toBe('30000000');
    expect(resposta.body.residents).toBeDefined();
    expect(resposta.body.residents.length).toBeGreaterThan(0);
    expect(resposta.body.residents[0]).toBe('https://swapi.dev/api/people/30/');
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/3/');
});

test('Deve retornar erro 404 ao buscar por um planeta inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999/');
    
    expect(resposta.status).toBe(404);
});