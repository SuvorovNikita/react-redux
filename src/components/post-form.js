import React from "react";
import {connect} from "react-redux";
import {creatPost, showAlert} from "./redux/action";
import {Alert} from "./alert";

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
            return this.props.showAlert('Название поста не может быть пустым')
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
                {this.props.alert && <Alert text={this.props.alert}/>}
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
    creatPost, showAlert
}
const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);