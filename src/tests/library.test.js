/*
9a Tänk dig att vi bygger en app som ska visa information om böcker, t.ex. för ett bibliotek. En funktion som kan tala om ifall en parameter är ett giltigt bok-objekt eller inte. (Ja, du kan använda Joi i funktionen för att validera objektet.)
function isBook(maybeBook) {}
// isBook(exampleBook) === true
// isBook(null) === false
// isBook({}) === false

Ett giltigt bok-objekt ska ha följande egenskaper:
- title: string
- author: string
- id: number
- borrowedBy: null


A1. om input är ett giltigt bok-objekt, returnera true
A2. om input inte är ett objekt, returnera false
A3. om input är ett objekt, men inte ett giltigt bok-objekt, returnera false
*/
import { isBook } from "../library.js"

let exampleBook = {
    title: 'Pippi Långstrump',
    author: 'Astrid Lindgren',
    id: 123456789,
    borrowedBy: null
}

describe('Library isBook', () => {
	test('om input är ett giltigt bok-objekt, returnera true', () => {
		const input = exampleBook
		const expected = true
		const actual = isBook(input)
		expect(actual).toBe(expected)
	})

	const cases1 = [
		[false, 'inte ett objekt alls'],
		[false, null],
		[false, 0]
	]
	test.each(cases1)('om input inte är ett objekt, returnera false (expect %s, värde %s)', (expected, input) => {
		const actual = isBook(input)
		expect(actual).toBe(expected)
	})

	const cases2 = [
		[{}],
		[{ author: 'abc', id: 123, borrowedBy: null }],
		[{ title: 'abc', id: 123, borrowedBy: null }],
		[{ title: 'abc', author: 'abc', borrowedBy: null }],
		[{ title: 'abc', author: 'abc', id: 123 }],
	]
	test.each(cases2)('om input är ett objekt, men inte ett giltigt bok-objekt, returnera false (%s)', (input) => {
		expect( isBook(input) ).toBe(false)
	})
})