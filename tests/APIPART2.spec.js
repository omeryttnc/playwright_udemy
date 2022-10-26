const { test, expect, request } = require('@playwright/test');
const APIUtils = require('../utils/APIUtils');
const loginPayload = { userEmail: "omeryttnc2@gmail.com", userPassword: "bbMdTHsd6wEg6xc" };
const orderPayload = { orders: [{ country: "Burkina Faso", productOrderedId: "6262e9d9e26b7e1a10e89c04" }] };
let response;


test.beforeAll(async()=>{
    const apiContext = await request.newContext();

    const apiUtilies = new APIUtils(apiContext, loginPayload);

     response =await apiUtilies.createOrder(orderPayload);

})

test('@API utilities deneme', async ({ page }) => {
    
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token)

    await page.goto("https://rahulshettyacademy.com/client");

    console.log( response);
    console.log("************");
    console.log(response.token);
    console.log("************");
    console.log(response.orderid);

})