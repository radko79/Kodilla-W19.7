import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMBS_UP_COMMENT, THUMBS_DOWN_COMMENT } from './actions.js'

function comments (state = [], action) {
	switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];

		case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);

		case EDIT_COMMENT:
			const rightComment = state.comments.find(comment => comment.id === action.id); // znajdź komentarz od id = temu z akcji
			if(rightComment) {
				const index = state.comments.indexOf(rightComment);						// znajdź początkową pozycję w tablicy
				return [
					...state.comments.slice(0, index),									// zwróć tablicę od początku do komentarza
					{
						...state.comments[index],										// w miejscu z początkiem starego komentarza
						text: action.text												// wstaw tekst
					},
					...state.comments.slice(index + 1, state.comments.length),			// dołącz pozostałą część tablicy
				];
			} else {
				return state;
			}
			
		case THUMBS_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votes: comment.votes + 1}
                }
            return comment;
            });

		case THUMBS_DOWN_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    if (comment.votes > 0) {
                        return {...comment, votes: comment.votes - 1}
                    }
                }
            return comment;
            });

		default:
			return state;
	}
}

export default comments;