import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getData } from '../../store/actions/index'
import BlogList from "./BlogList";
import Menubar from "../layout/Menubar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.dispatch(getData());
    }

    render() {
        const { data, history } = this.props
        return (
            <div>
                <Menubar />
            <div className='container'>
                <BlogList data={data} history={history}/>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        data: state.blogs
    }
}
export default connect(mapStateToProps, null)(Home);