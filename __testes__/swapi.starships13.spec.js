const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar pela nave TIE Advanced x1 (ID 13)', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/13/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('TIE Advanced x1');
    expect(resposta.body.model).toBe('Twin Ion Engine Advanced x1');
    expect(resposta.body.manufacturer).toBe('Sienar Fleet Systems');
    expect(resposta.body.cost_in_credits).toBe('unknown');
    expect(resposta.body.length).toBe('9.2');
    expect(resposta.body.max_atmosphering_speed).toBe('1200');
    expect(resposta.body.crew).toBe('1');
    expect(resposta.body.passengers).toBe('0');
    expect(resposta.body.cargo_capacity).toBe('150');
    expect(resposta.body.consumables).toBe('5 days');
    expect(resposta.body.hyperdrive_rating).toBe('1.0');
    expect(resposta.body.MGLT).toBe('105');
    expect(resposta.body.starship_class).toBe('Starfighter');
    
    expect(resposta.body.pilots).toBeDefined();
    expect(resposta.body.pilots.length).toBeGreaterThan(0);
    expect(resposta.body.pilots[0]).toBe('https://swapi.dev/api/people/4/');

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
});

test('Deve retornar erro 404 ao buscar por uma nave inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/9999/');
    
    expect(resposta.status).toBe(404);
});