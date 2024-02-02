const { test, expect } = require('@playwright/test');

test('Create a booking', async ({ request }) => {
    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
        data: {
            "firstname": "Juan",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        },
        headers: {
            'Accept': 'application/json'
        }
    });

    // Obtener el cuerpo de la respuesta JSON
    const responseBody = await response.json();
    console.log(responseBody);

    // Verificar el estado de la respuesta HTTP
    expect(response.status()).toBe(200);

    // Verificar la existencia del atributo 'bookingid' en el cuerpo de la respuesta
    expect(responseBody.bookingid).toBeDefined();

    // Almacenar el bookingid en una variable para su uso posterior
    const bookingId = responseBody.bookingid;

    // Verificar los datos de la reserva, excluyendo el bookingid
    expect(responseBody.booking).toEqual({
        "firstname": "Juan",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    });

    // Verificar que el bookingid coincide con el valor capturado dinámicamente
    expect(bookingId).toBe(responseBody.bookingid);
});
