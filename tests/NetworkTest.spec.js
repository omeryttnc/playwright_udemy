const { test, expect, request } = require('@playwright/test');
const APIUtils = require('../utils/APIUtils');
const loginPayload = { userEmail: "omeryttnc2@gmail.com", userPassword: "bbMdTHsd6wEg6xc" };
const orderPayload = { orders: [{ country: "Burkina Faso", productOrderedId: "6262e9d9e26b7e1a10e89c04" }] };
let response;
const fakePayLoadOrders = {data:[],message:"No Orders"};

test.beforeAll(async () => {
    const apiContext = await request.newContext();

    const apiUtilies = new APIUtils(apiContext, loginPayload);

    response = await apiUtilies.createOrder(orderPayload);

})

test('utilities deneme', async ({ page }) => {

    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token)

    await page.goto("https://rahulshettyacademy.com/client");
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/634abf8ac4d0c51f4f3eb1f3",
        async route => {

            const response = await page.request.fetch(route.request());

            let body = fakePayLoadOrders;
            route.fulfill({
                response,
                body
            });
        });
        await page.locator("button[routerlink*='myorders']").click();
        //await page.pause();
        console.log(await page.locator(".mt-4").textContent());



    console.log(response);
    console.log("************");
    console.log(response.token);
    console.log("************");
    console.log(response.orderid);

})