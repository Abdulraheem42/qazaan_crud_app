import React, {Component} from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';

class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleEdit(id){
        localStorage.setItem('doc_id',  id)
        this.props.history.push('/createblog')
        console.log(this.props, 'this.props in handle edit')
    }

    render() {
        const { data } = this.props
        return (
            <div className='row'>
                {data.map(res => {
                    return(
                            <div className="col l12 s12 m12" key={res.id}>
                                <div className="card">
                                    <div className="card-content white-text">
                                        <div className='black-text'><h5>User: {res.userId}</h5></div>
                                        <span className="card-title"><h4>{res.title}</h4></span>
                                        <p>{res.body}</p>
                                    </div>
                                    <div className="card-action">
                                       <NavLink to={`/detailBlog/${res.id}`}>
                                           <button className='btn-small black'>Detail</button>
                                       </NavLink>
                                       <button className='btn-small black' onClick={this.handleEdit.bind(this, res.id)}>Edit</button>
                                       <button className='btn-small black'>Delete</button>
                                    </div>
                                </div>
                            </div>
                    )
                })}
            </div>
        );
    }
}

export default BlogList;