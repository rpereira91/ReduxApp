import React, {Component} from 'react';
//import connect function to react from redux, will merge the two
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">{book.title}
                </li>
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
//anythinng returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed to all of our reducers that's what bind actioncreators is doing
    //the result needs to flow through the dispatch function
    return bindActionCreators({selectBook: selectBook}, dispatch)
}
//takes a function and a component and produces a container
//propmte booklist from the component to a container, it needs to know about the dispatch method select book
//make it avalable as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)