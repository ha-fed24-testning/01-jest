import { nextNumber } from "../example.js"

test('när man anropar funktionen med ett tal returnerar den talet plus 1', () => {
	// Arrange
	const input = 17
	const expected = 18
	
	// Act
	const actual = nextNumber(input)
	
	// Assert
	expect(actual).toBe(expected)
})

test('när man skickar in något som inte är ett tal ska funktionen returnera false', () => {
	// Arrange
	const input = 'x'
	const expected = false

	// Act
	const actual = nextNumber(input)

	// Assert
	expect(actual).toBe(expected)
})