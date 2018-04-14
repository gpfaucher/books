export function getBooks(book) {
    return {
        type: 'GET_BOOKS',
    };
}

export function postBooks(book) {
    return {
        payload: book,
        type: 'POST_BOOK',
    };
}

export function deleteBooks(id) {
    return {
        payload: id,
        type: 'DELETE_BOOK',
    };
}

export function updateBooks(book) {
    return {
        payload: book,
        type: 'UPDATE_BOOK',
    };
}
