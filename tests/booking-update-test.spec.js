const { test, expect } = require('@playwright/test');

test('Update additional needs of a booking', async ({ request }) => {
    // Definir el ID de la reserva a actualizar
    const bookingId = 783;

    // Definir los datos actualizados para la reserva
    const updatedData = {
        "firstname": "Juan",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Dinner"
    };

    // Realizar la solicitud PUT para actualizar la reserva por su ID
    const response = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
        data: updatedData,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
            'Cookie': 'token=abc123'
        }
    });

    // Verificar el código de estado de la respuesta
    expect(response.status()).toBe(200);

    // Obtener el cuerpo de la respuesta JSON
    const responseBody = await response.json();

    console.log(responseBody);

    // Verificar que la reserva se haya actualizado correctamente
    expect(responseBody).toEqual({
        "firstname": "Juan",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Dinner" // Verificar que las necesidades adicionales se hayan actualizado
    });
});
