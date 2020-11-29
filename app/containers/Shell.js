import {connect} from 'react-redux';
import * as actions from '../state/actions/auth.actions';
import {bindActionCreators} from 'redux'
import Shell from '../screens/Shell';
  
const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated,
    user: state.auth.user
})

const mapDispatchToProps  = (dispatch) => ({
    logout: bindActionCreators(actions.logout, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps) (Shell);
