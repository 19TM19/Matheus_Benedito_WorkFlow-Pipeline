const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar pelo filme "The Empire Strikes Back" (ID 2)', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/2/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.title).toBe('The Empire Strikes Back');
    expect(resposta.body.episode_id).toBe(5);
    expect(resposta.body.opening_crawl).toBeTruthy();
    expect(resposta.body.director).toBe('Irvin Kershner');
    expect(resposta.body.producer).toBe('Gary Kurtz, Rick McCallum');
    expect(resposta.body.release_date).toBe('1980-05-17');
    
    expect(resposta.body.characters).toBeDefined();
    expect(resposta.body.characters.length).toBeGreaterThan(0);
    expect(resposta.body.characters[0]).toBe('https://swapi.dev/api/people/1/');  // Verificando um dos personagens

    expect(resposta.body.planets).toBeDefined();
    expect(resposta.body.planets.length).toBeGreaterThan(0);
    expect(resposta.body.planets[0]).toBe('https://swapi.dev/api/planets/4/');  // Verificando um dos planetas

    expect(resposta.body.starships).toBeDefined();
    expect(resposta.body.starships.length).toBeGreaterThan(0);
    expect(resposta.body.starships[0]).toBe('https://swapi.dev/api/starships/3/');  // Verificando uma das naves

    expect(resposta.body.vehicles).toBeDefined();
    expect(resposta.body.vehicles.length).toBeGreaterThan(0);
    expect(resposta.body.vehicles[0]).toBe('https://swapi.dev/api/vehicles/8/');  // Verificando um dos veículos

    expect(resposta.body.species).toBeDefined();
    expect(resposta.body.species.length).toBeGreaterThan(0);
    expect(resposta.body.species[0]).toBe('https://swapi.dev/api/species/1/');  // Verificando uma das espécies
});

test('Deve retornar erro 404 ao buscar por um filme inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/9999/');  // ID inexistente
    
    expect(resposta.status).toBe(404);
});