import { subtract } from "../utils.js"

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