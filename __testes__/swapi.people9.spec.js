const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar por Biggs Darklighter (ID 9)', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/9/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Biggs Darklighter');
    expect(resposta.body.height).toBe('183');
    expect(resposta.body.mass).toBe('84');
    expect(resposta.body.hair_color).toBe('black');
    expect(resposta.body.skin_color).toBe('light');
    expect(resposta.body.eye_color).toBe('brown');
    expect(resposta.body.birth_year).toBe('24BBY');
    expect(resposta.body.gender).toBe('male');
    
    expect(resposta.body.homeworld).toBe('https://swapi.dev/api/planets/1/');
    
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');

    expect(resposta.body.species).toBeDefined();
    expect(resposta.body.species.length).toBe(0);

    expect(resposta.body.vehicles).toBeDefined();
    expect(resposta.body.vehicles.length).toBe(0);

    expect(resposta.body.starships).toBeDefined();
    expect(resposta.body.starships.length).toBeGreaterThan(0);
    expect(resposta.body.starships[0]).toBe('https://swapi.dev/api/starships/12/');
});

test('Deve retornar erro 404 ao buscar por um personagem inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/9999/');  // ID inexistente
    
    expect(resposta.status).toBe(404);
});