
const {hello,dobule,divide} = require('../src/asyncBasic');

describe("lihtsad aync functionid", () => {
    test("hello peab tagastama nime", async ()=>{
        const result = await hello("Anton")
        expect(result).toBe("Hello, Anton!")
    })


    test('tagastab kahekordse numbri', async () => {
        expect(await dobule(2)).toBe(4);
    })

    test("jagab kahe arvu jagamist", async () => {
        expect( await divide(6,2) ).toBe(3);
    })

    test("jagab nulliga", async () => {
        expect( await divide(6,0) ).toBe("error - cannot divide by zero");
    })

})
