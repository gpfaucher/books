export const books = (
    state = {books: []},
    action,
) => {
    switch (action.type) {
        case 'POST_BOOK': {
            return {
                books: [
                    ...state.books,
                    ...action.payload,
                ],
            };
            break;
        }
        case 'DELETE_BOOK': {
            const books = [...state.books];
            const index = books.findIndex((book) => {
                return book.id === action.payload.id;
            });

            return {
                books: [...books.slice(0, index), ...books.slice(index + 1)],
            };
        }
        case 'UPDATE_BOOK': {
            const books = [...state.books];
            const index = books.findIndex((book) => {
                return book.id === action.payload.id;
            });
            const newBook = {
                ...books[index],
                title: action.payload.title,
            };

            if (action.payload.description) {
                newBook.description = action.payload.description;
            } else if (action.payload.price) {
                newBook.price = action.payload.price;
            }

            return {
                books: [
                    ...books.slice(index + 1),
                    newBook
                ],
            };
        }
        default:
            return state;
    }
};
