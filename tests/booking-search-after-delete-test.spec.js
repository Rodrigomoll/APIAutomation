const { test, expect } = require('@playwright/test');

test('Search booking by ID after deletion', async ({ request }) => {
    const bookingId = 1202;

    // Realizar la solicitud GET para buscar la reserva por su ID después de eliminarla
    const response = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);

    // Verificar el código de estado de la respuesta
    expect(response.status()).toBe(404);

    // Verificar que el cuerpo de la respuesta contenga "Not Found" porque no podía encontrar algo vacio
    const responseBody = await response.text();
    expect(responseBody).toContain('Not Found');
});
