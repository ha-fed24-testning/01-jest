
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

export { subtract, triple }
