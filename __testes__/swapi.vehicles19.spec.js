const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar pelo veículo AT-ST (ID 19)', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/19/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('AT-ST');
    expect(resposta.body.model).toBe('All Terrain Scout Transport');
    expect(resposta.body.manufacturer).toBe('Kuat Drive Yards, Imperial Department of Military Research');
    expect(resposta.body.cost_in_credits).toBe('unknown');
    expect(resposta.body.length).toBe('2');
    expect(resposta.body.max_atmosphering_speed).toBe('90');
    expect(resposta.body.crew).toBe('2');
    expect(resposta.body.passengers).toBe('0');
    expect(resposta.body.cargo_capacity).toBe('200');
    expect(resposta.body.consumables).toBe('none');
    expect(resposta.body.vehicle_class).toBe('walker');
    
    expect(resposta.body.pilots).toBeDefined();
    expect(resposta.body.pilots.length).toBeGreaterThan(0);
    expect(resposta.body.pilots[0]).toBe('https://swapi.dev/api/people/13/');

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/2/');
    expect(resposta.body.films[1]).toBe('https://swapi.dev/api/films/3/');
});

test('Deve retornar erro 404 ao buscar por um veículo inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/9999/');  // ID inexistente
    
    expect(resposta.status).toBe(404);
});