import { capitalize, combineWords, divide, isItRaining, subtract, trimma, triple } from "../utils.js"

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
	test('om b inte är en sträng, returnera false', () => {
		const a = 'kaknästornet'
		const b = -1
		const expected = false
		const actual = combineWords(a, b)
		expect(actual).toBe(expected)
	})
})


describe('trimma', () => {
	test('om parametern inte är en sträng, returnera false', () => {
		const input = 42
		const expected = false
		const actual = trimma(input)
		expect(actual).toBe(expected)
	})

	const cases = [
		// expected, input
		['abc', 'abc'],
		['hello!', 'hello!   '],
		['x', '  x  ']

	]

	test.each(cases)('returnerar %s genom att ta bort inledande och avslutande mellanslag från strängen %s', (expected, input) => {
		const actual = trimma(input)
		expect(actual).toBe(expected)
	})
})

describe('capitalize', () => {
	/*
	3c En funktion som konverterar en sträng till versaler (stora bokstäver).
	A1. för "" ska funktionen returnera ""
	A2. för "meet" ska funktionen returnera "MEET"
	A3. om parametern inte är en sträng ska funktionen returnera false
	*/
	test('om parametern inte är en sträng ska funktionen returnera false', () => {
		// Arrange, act, assert
		const input = 5
		const expected = false

		const actual = capitalize(input)

		expect(actual).toBe(expected)

		// Det går att testa direkt också:
		// expect( capitalize(5) ).toBe( false )
	})

	test('för "" ska funktionen returnera ""', () => {
		const input = ''
		const expected = ''
		const actual = capitalize(input)
		expect(actual).toBe(expected)
	})

	test('för "meet" ska funktionen returnera "MEET"', () => {
		const input = 'meet'
		const expected = 'MEET'
		const actual = capitalize(input)
		expect(actual).toBe(expected)
	})

})


describe('isItRaining', () => {
	/*
	4 En funktion som talar om ifall det regnar eller inte. "moistureLevel" ska vara ett tal mellan 0 och 1. Om talet är minst 0.8 ska funktionen räkna det som regn.
	function isItRaining(moistureLevel) {}

	A1. om moistureLevel >= 0.8 ska funktionen returnera true
	A2. om moistureLeveL < 0.8 ska funktionen returnera false
	A3. om moistureLeveL inte är ett tal ska funktionen returnera null
	*/

	test('om moistureLeveL < 0.8 ska funktionen returnera false', () => {
		const input = 0.79
		const expected = false
		const actual = isItRaining(input)
		expect(actual).toBe(expected)
	})

	test('om moistureLevel >= 0.8 ska funktionen returnera true', () => {
		const input = 0.8
		const expected = true
		const actual = isItRaining(input)
		expect(actual).toBe(expected)
	})

	test('om moistureLeveL inte är ett tal ska funktionen returnera null', () => {
		const input = 'anka'
		const expected = null
		const actual = isItRaining(input)
		expect(actual).toBe(expected)
	})

})


describe('divide', () => {
	/*
	5 En funktion som dividerar två tal med varandra. Tips: du kan behöva fånga errors med try/catch. Läs på om toThrow matcher.
	function divide(x, y) {}   // divide(7, 2) === 3.5

	// 10 / 2 -> 5
	// 0 / 2 -> 0
	// 10 / 0 -> Infinity
	// 0 / 0 -> NaN

	A1. kastar ett fel om x=0 och y=0
	A2. kastar ett fel om bara y=0
	A3. returnerar x/y
	*/

	test('kastar ett fel om bara y=0', () => {
		const x = 12, y = 0

		expect(() => {
			divide(x, y)  // ska kasta ett Error
		}).toThrow('Kan inte dela ett tal med noll!')
	})

	test('kastar ett fel om x=0 och y=0', () => {
		const x = 0, y = 0

		expect(() => {
			divide(x, y)
		}).toThrow('Båda talen får inte vara noll!')
	})

	test('returnerar x/y', () => {
		const x = 77, y = 7
		const expected = 77 / 7

		const actual = divide(x, y)

		expect(actual).toBe(expected)
	})
})