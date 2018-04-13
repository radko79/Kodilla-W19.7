import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbsUpComment} from './actions'
import {thumbsDownComment} from './actions'
import {removeComment} from './actions'

const mapDispatchToProps = dispatch => ({
  thumbsUpComment: (id) => dispatch(thumbsUpComment(id)),
  thumbsDownComment: id => dispatch(thumbsDownComment(id)),
  removeComment: id => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);
