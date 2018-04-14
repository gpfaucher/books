import * as React from 'react';

class BooksForm extends React.Component {
    public render() {
        return(
            <div>
                <form>
                    <label>Title</label>
                    <input
                        type='text'
                        placeholder='Enter title'
                        ref='title'
                    />
                </form>
                <button>Submit</button>

                <form>
                    <label>Description</label>
                    <input
                        type='text'
                        placeholder='Enter description'
                        ref='description'
                    />
                </form>
                <button>Submit</button>

                <form>
                    <label>Price</label>
                    <input
                        type='number'
                        placeholder='Enter price'
                        ref='price'
                    />
                </form>
                <button>Submit</button>
            </div>
        );
    }
}

export default BooksForm;
