import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class DetailBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props, 'this.props.blosg')
      const { blog } = this.props
        return (
            <div className='container'>
                <h2 className="text-grey center">Detail your Blog</h2>
                {this.props.blog ? (
                    <div className='container white-text'>
                        <div className='card z-depth-2'>
                            <div className='card-content'>
                                <span className='card-title '><h4>{blog.title}</h4></span>
                                <p>{blog.body}</p>
                            </div>
                            <div className='card-action'>
                                <span>User: {blog.userId}</span>
                                <NavLink to='/'><button className='btn-small black right'>Go To home</button></NavLink>
                            </div>
                        </div>
                    </div> ) : (
                    <div className='center'>Loading......</div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return{
        blog: state.blogs.find(blog => blog.id == id)
    }
}

export default connect(mapStateToProps)(DetailBlog);