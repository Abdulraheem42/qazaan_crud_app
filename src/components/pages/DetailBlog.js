import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class DetailBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                isLoaded: true
            })
        }, 1000)
    }

    render() {
        const { blog } = this.props
        return (
            <div className='container'>
                {this.state.isLoaded ?
                    <div>
                        <h2 className="text-grey center">Detail your Blog</h2>
                        {this.props.blog ? (
                            <div className='container white-text'>
                                <div className='card z-depth-2'>
                                    <div className='card-content'>
                                        <span className='card-title '><h4>{blog.title}</h4></span>
                                        <p>{blog.body}</p>
                                    </div>
                                    <div className='card-action blue'>
                                        <span>User: {blog.userId}</span>
                                        <NavLink to='/'><button className='btn-small black right'>Go To home</button></NavLink>
                                    </div>
                                </div>
                            </div> ) : (
                            <div style={{padding: 10}} className='center blue white-text'>
                                <h5>Some thing went Wrong</h5>
                                <span><h3>:(</h3></span>
                                <NavLink to='/'><button className='btn-small black'>Go To home</button></NavLink>
                            </div>
                        )}
                    </div>
                    :
                    <div className="progress">
                        <div className="indeterminate">
                        </div>
                    </div>
                }
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