import {connect} from 'react-redux';
import Score from '../components/score';

const mapStateToProps = ({attempts, counter}) => ({attempts, counter});
export default connect(mapStateToProps)(Score);
