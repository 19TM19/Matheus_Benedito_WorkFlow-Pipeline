const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar pela espécie Wookie (ID 3)', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/3/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Wookie');
    expect(resposta.body.classification).toBe('mammal');
    expect(resposta.body.designation).toBe('sentient');
    expect(resposta.body.average_height).toBe('210');
    expect(resposta.body.skin_colors).toBe('gray');
    expect(resposta.body.hair_colors).toBe('black, brown');
    expect(resposta.body.eye_colors).toBe('blue, green, yellow, brown, golden, red');
    expect(resposta.body.average_lifespan).toBe('400');
    expect(resposta.body.language).toBe('Shyriiwook');
    
    expect(resposta.body.homeworld).toBe('https://swapi.dev/api/planets/14/');

    expect(resposta.body.people).toBeDefined();
    expect(resposta.body.people.length).toBeGreaterThan(0);
    expect(resposta.body.people[0]).toBe('https://swapi.dev/api/people/13/');  // Verificando um dos indivíduos

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
    expect(resposta.body.films[1]).toBe('https://swapi.dev/api/films/2/');
    expect(resposta.body.films[2]).toBe('https://swapi.dev/api/films/3/');
    expect(resposta.body.films[3]).toBe('https://swapi.dev/api/films/6/');
});

test('Deve retornar erro 404 ao buscar por uma espécie inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/9999/');  // ID inexistente
    
    expect(resposta.status).toBe(404);
});