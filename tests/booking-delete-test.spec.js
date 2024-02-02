const { test, expect } = require('@playwright/test');

test('Delete booking by ID', async ({ request }) => {

    const bookingId = 1202; 

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
        'Cookie': 'token=abc123'
    };

    const deleteResponse = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingId}`,{ headers });

    expect(deleteResponse.status()).toBe(201);

    const getResponse = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);

    expect(getResponse.status()).toBe(404);
});

//quizas no funca por el authorize