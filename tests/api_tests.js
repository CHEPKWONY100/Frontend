import fetch from 'node-fetch';

describe('API Endpoints', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  it('should get user list', async () => {
    const response = await fetch(`${baseURL}/users`);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  it('should get album details', async () => {
    const response = await fetch(`${baseURL}/albums/1`);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toHaveProperty('title');
    expect(data.id).toBe(1);
  });

  it('should get photo list', async () => {
    const response = await fetch(`${baseURL}/photos`);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });
});