import {sum } from "../Sum";



test("Sum function should calculated the sum of the numbers",()=>{
    const result = sum(3,4);

    //Assertion
    expect(result).toBe(7);
});