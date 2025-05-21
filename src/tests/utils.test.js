import { combineWords, subtract, triple } from "../utils.js"

describe('subtract', () => {
	// A2 Om x inte är ett tal ska funktionen returnera 'x måste vara ett tal'
	test("Om x inte är ett tal ska funktionen returnera 'x måste vara ett tal'", () => {
		const x = '!'
		const y = 5
		const expected = 'x måste vara ett tal'

		const actual = subtract(x, y)

		expect(actual).toBe(expected)
	})

	// A1 Om x och y är tal ska funktionen returnera x-y
	test("Om x och y är tal ska funktionen returnera x-y", () => {
		const x = 3
		const y = 27
		const expected = 3 - 27

		const actual = subtract(x, y)

		expect(actual).toBe(expected)
	})
})  // describe subtract


describe('triple', () => {
	test('Om man skickar in ett tal x ska funktionen returnera 3*x', () => {
		// Arrange
		const input = 58
		const expected = input * 3

		// Act
		const actual = triple(input)

		// Assert
		expect(actual).toBe(expected)
	})

	test('Annars ska funktionen returnera false', () => {
		const input = 'hotpink'
		const expected = false
		const actual = triple(input)
		expect(actual).toBe(expected)
	})
})


describe('combineWords', () => {
	test('slå ihop två strängar och returnera resultatet', () => {
		const a = 'cashew'
		const b = 'bok'
		const expected = 'cashew, bok'
		const actual = combineWords(a, b)
		expect(actual).toBe(expected)
	})

	test('om a inte är en sträng, returnera false', () => {
		const a = [1, 2, 3]
		const b = 'myra'
		const expected = false
		const actual = combineWords(a, b)
		expect(actual).toBe(expected)
	})
})
