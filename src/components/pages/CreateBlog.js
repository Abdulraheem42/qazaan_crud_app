import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { connect } from 'react-redux';
import { postData, updatePostData } from "../../store/actions";

class CreateBlog extends Component {
    constructor(props){
        super(props);
        this.state = ({
            doc_id: localStorage.getItem('doc_id'),
            title: '',
            body: '',
            isEditing: true
        })
    }

    componentDidMount() {
        const { doc_id } = this.state
        if(doc_id){
            const { data } = this.props
            const edit = data.find(blog => {
                return blog.id == doc_id
            })
            this.setState({
                isEditing: false,
                title: edit.title,
                body: edit.body,
            })
        }
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit(event){
        event.preventDefault();
        const blogData = {
            title: this.state.title,
            body: this.state.body,
            userId: this.state.userId
        }
        this.props.addBlog(blogData)
        this.setState({
            title: '',
            body: '',
            userId: ''
        });
        this.props.history.push('/')
    };

    handleUpdate(event){
        event.preventDefault();
        const blogData = {
            title: this.state.title,
            body: this.state.body,
        }
        this.props.updateBlog(this.state.doc_id, blogData)
        this.setState({
            title: '',
            body: '',
        });
        // this.props.history.push('/')
    }

    render() {
        console.log(this.props.data, 'this.props.data')
        const { isEditing } = this.state
        return (
            <div className='container'>
                <form className='white' action="" onSubmit={isEditing ? this.handleSubmit.bind(this) : this.handleUpdate.bind(this)}>
                    <h2 className="text-grey center">Write your Blog</h2>
                    <div className='row'>
                        <div className='col l12 s12 input-field'>
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                   required
                                   value={this.state.title}
                                   id='title'
                                   name='title'
                                   onChange={this.handleChange.bind(this)} />
                        </div>
                        <div className='col l12 s12 input-field'>
                                <textarea id="textarea2" className="materialize-textarea"
                                          data-length="120"
                                          required
                                          value={this.state.body}
                                          name='body'
                                          onChange={this.handleChange.bind(this)}
                                >
                                </textarea>
                            <label htmlFor="textarea2">Textarea</label>
                        </div>
                        <div className='col l12 s12 input-field center'>
                            {isEditing ?
                                <button type='submit' className='btn btn-large blue z-depth-2'>Submit</button>
                                :
                                <button type='submit' className='btn btn-large blue z-depth-2'>Update</button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addBlog: (addBlog) => dispatch(postData(addBlog)),
        updateBlog: (id, addBlog) => dispatch(updatePostData(id, addBlog))
    }
}
const mapStateToProps = (state) => {
    return{
        data: state.blogs
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog);
