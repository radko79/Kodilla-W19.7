import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super();

        this.state = {
            value: ''
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.value) {
            this.props.addComment(this.state.value);
        }
        this.setState({value: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="new_comment">Add a comment:</label>
                    <textarea id="new_comment" name="new_comment" rows="6" 
                        onChange={this.handleChange} value={this.state.value} />
                </div>
                <div>
                    <input type="Submit" value="Submit" />
                </div>
            </form>
        )
    }

}

export default CommentForm;