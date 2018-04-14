import * as React from 'react';

class Book extends React.Component {
    public render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <p>${this.props.price}</p>
                <button>Buy Now</button>
            </div>
        );
    }
}

export default Book;
