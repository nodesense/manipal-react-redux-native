import {connect} from 'react-redux';
import * as actions from '../state/actions/auth.actions';
import {bindActionCreators} from 'redux'
import Login from '../screens/Login';
  
const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated,
    user: state.auth.user
})

const mapDispatchToProps  = (dispatch) => ({
    loginSuccess: bindActionCreators(actions.loginSuccess, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps) (Login);
