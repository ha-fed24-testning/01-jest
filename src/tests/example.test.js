
test('när man anropar funktionen med ett tal returnerar den talet plus 1', () => {
	// Arrange
	const input = 17
	const expected = 18
	
	// Act
	const actual = nextNumber(input)
	
	// Assert
	expect(actual).toBe(expected)
})
