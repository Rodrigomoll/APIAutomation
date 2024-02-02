const { test, expect } = require('@playwright/test');

test('Search booking by ID', async ({ request }) => {
    // Definir el ID de la reserva a buscar
    const bookingId = 3521;

    // Realizar la solicitud GET para buscar la reserva por su ID
    const response = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);

    // Verificar el código de estado de la respuesta
    expect(response.status()).toBe(200);

    // Obtener el cuerpo de la respuesta JSON
    const responseBody = await response.json();

    console.log(responseBody);

    // Verificar la igualdad profunda del cuerpo de la respuesta con los datos enviados al crear la reserva
    expect(responseBody).toEqual({
        "firstname": "Juan",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Dinner"
    });
});
