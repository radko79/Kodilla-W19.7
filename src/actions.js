const uuidv4 = require('uuid/v4');

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMBS_UP_COMMENT = 'THUMBS_UP_COMMENT';
export const THUMBS_DOWN_COMMENT = 'THUMBS_DOWN_COMMENT';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const addComment = text => {
	return {
		type: ADD_COMMENT,
		id: uuidv4(),
		text
	}
}

export const editComment = function text(id, text) {
	return {
		type: EDIT_COMMENT,
		id,
		text
	}
}

export const removeComment = commentId => {
	return {
		type: REMOVE_COMMENT,
		id: commentId			
	}
}

export const thumbsUpComment = commentId => {
	return {
		type: THUMBS_UP_COMMENT,
		id: commentId
	}
}

export const thumbsDownComment = commentId => {
	return {
		type: THUMBS_DOWN_COMMENT,
		id: commentId
	}
}

const addUser = (userId, name) => {
    return {
        type: ADD_USER,
        id: userId,
        name
    }
}

const removeUser = userId => {
    return {
        type: REMOVE_USER,
        id: userId
    }
}