import {connect} from 'react-redux';
import * as actions from '../state/actions/auth.actions';
import {bindActionCreators} from 'redux'
import App from '../App';
  
const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated,
    user: state.auth.user
})

const mapDispatchToProps  = (dispatch) => ({
     
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
