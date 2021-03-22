import React from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from '../redux/actions'

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        //Метод trim() удаляет пробельные символы с начала и конца строки
        if(!title.trim()) {
            return this.props.showAlert('Название поста не может быть пустым!')
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        console.log(newPost)
        this.props.createPost(newPost)
        //чистим input
        this.setState({title: ''})
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }})
        )
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="mb-3">
                    <label htmlFor='title'>Заголовок поста</label>
                    <input
                        type='text'
                        className='form-control'
                        id='title'
                        value={this.state.title}
                        name='title'
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className='btn btn-success' type='submit'>Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost: createPost,
    showAlert: showAlert()
}

export default connect(null, mapDispatchToProps)(PostForm)