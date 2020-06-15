import React from "react";
import {connect} from "react-redux";
import {creatPost} from "./redux/action";

class PostForm extends React.Component {

    constructor() {
        super();
        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()
        const {title} = this.state
        if (!title.trim()) {
            return
        }
        const newPost = {
            title, id: Date.now().toString()
        }
        this.props.creatPost(newPost)
        this.setState({title: ''})
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({
                ...prev, ...{
                    [event.target.name]: event.target.value
                }
            }
        ))
    }

    render() {
        return (

            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок</label>
                    <input type="text"
                           value={this.state.title}
                           name='title'
                           onChange={this.changeInputHandler}
                           className="form-control"
                           id="title"/>
                </div>
                <button className='btn btn-success' type='submit'>Создать</button>
            </form>
        )
    }

}

const mapDispatchToProps = {
    creatPost
}

export default connect(null, mapDispatchToProps)(PostForm);