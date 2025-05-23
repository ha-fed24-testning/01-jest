
// A1 Om x och y är tal ska funktionen returnera x-y
// A2 Om x inte är ett tal ska funktionen returnera 'x måste vara ett tal'

// A3 Om y inte är ett tal...

function subtract(x, y) {
	const xIsNumber = typeof x === 'number'
	const yIsNumber = typeof y === 'number'
	if( xIsNumber && yIsNumber ) {
		return x - y
	}
	return 'x måste vara ett tal'
}

// Övning 2.2
function triple(x) {
	if( typeof x !== 'number' ) {
		return false
	}
	return x * 3
}

// Övning 2.3a
function combineWords(a, b) {
	if( (typeof a !== 'string') || (typeof b !== 'string') ) {
		return false
	}
	return a + ', ' + b
}

// Övning 2.3b
function trimma(str) {
	if( typeof str !== 'string' ) {
		return false
	}
	return str.trim()
}

// Övning 2.3c
function capitalize(text) {
	if( typeof text !== 'string' ) {
		return false
	}
	return text.toLocaleUpperCase()
}

// Övning 2.4
function isItRaining(moistureLevel) {
	if( typeof moistureLevel !== 'number' ) {
		return null
	}
	return moistureLevel >= 0.8
}


// Övning 2.5
function divide(x, y) {
	if( x === 0 && y === 0 ) {
		throw new Error('Båda talen får inte vara noll!')
	} else if( y === 0 ) {
		throw new Error('Kan inte dela ett tal med noll!')
	}

	return x / y
}


export { divide, subtract, triple, combineWords, trimma, capitalize, isItRaining }
