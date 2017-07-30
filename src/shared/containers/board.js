import {connect} from 'react-redux';
import Board from '../components/board';

const mapStateToProps = ({matrix}) => ({matrix});
export default connect(mapStateToProps)(Board);
