export function selectBook(book){
    //select book is an action creator, it needs to return an action
    //an object with a type property
    return{
        //the action always contains a type and possibly a payload
        type: 'BOOK_SELECTED',
        payload: book
    };
}