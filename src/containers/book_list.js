import React, {Component} from 'react';
//import connect function to react from redux, will merge the two
import { connect } from 'react-redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
//connection between redux and the container
//takes a state and returns an object
function mapStateToProps(state){
    //whatever is returned from here will show up as props in booklist
    return{
        books: state.books
    };
}
//takes a function and a component and produces a container
export default connect(mapStateToProps)(BookList)