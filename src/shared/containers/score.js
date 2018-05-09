import {connect} from 'react-redux';

import {Score} from '../components';

const mapStateToProps = ({attempts, counter}) => ({attempts, counter});
export default connect(mapStateToProps)(Score);
