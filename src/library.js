
function isBook(maybeBook) {
	if( typeof maybeBook !== 'object' || maybeBook === null ) {
		return false
	}
	else if( typeof maybeBook.title !== 'string' ) {
		return false
	}
	else if( typeof maybeBook.author !== 'string' ) {
		return false
	}
	else if( typeof maybeBook.id !== 'number' ) {
		return false
	}
	else if( maybeBook.borrowedBy !== null ) {
		return false
	}

	return true
}

export { isBook }
