import { dramatize } from "../dramatize.js"

it("should return a string with an additional exclamation point", () => {
	// Arrange
    const input = 'Hello'
    const expected = 'Hello!'

	// Act
    const actual = dramatize(input)

	// Assert
    expect(actual).toBe(expected)
})
