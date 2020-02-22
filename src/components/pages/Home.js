import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getData } from '../../store/actions/index'
import BlogList from "./BlogList";
import Menubar from "../layout/Menubar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        this.props.dispatch(getData());

    }

    render() {
        const { data, isLoaded, history } = this.props
        return (
            <div>
                <Menubar />
            <div className='container'>
                {isLoaded ?
                    <div className="progress">
                        <div className="indeterminate">
                        </div>
                    </div>
                    :
                    <BlogList data={data} history={history}/>
                }
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        data: state.blogs,
        isLoaded: state.isLoaded
    }
}
export default connect(mapStateToProps, null)(Home);