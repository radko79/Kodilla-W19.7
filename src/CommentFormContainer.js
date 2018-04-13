import {connect} from 'react-redux';
import CommentForm from './CommentForm';
import {addComment} from './actions'

const mapDispatchToProps = dispatch => ({
    addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(CommentForm);