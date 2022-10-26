const { test, expect, request } = require('@playwright/test');
const loginPayload = { userEmail: "omeryttnc2@gmail.com", userPassword: "bbMdTHsd6wEg6xc" };
const OrderPayload = { orders: [{ country: "Burkina Faso", productOrderedId: "6262e990e26b7e1a10e89bfa" }] };
let token;
let orderid;
test.beforeAll(async () => {

    const apiContext = await request.newContext();


    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",

        {
            data: loginPayload
        }
    )

    expect(loginResponse.ok()).toBeTruthy();

    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;


    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
        data: OrderPayload,
        headers: {
            "Authorization": token,
            "Content-Type": "application/json",


        }
    });
    const orderResponseJson = await orderResponse.json();
    orderid = orderResponseJson.orders[0];

});


test.beforeEach(() => {

})



test('@API Browser context playwrigt test', async ({ page }) => {


    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token)



    await page.goto("https://rahulshettyacademy.com/client");


    console.log(orderid);

 //   await page.pause();


});
