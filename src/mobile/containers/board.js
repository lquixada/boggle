import {connect} from 'react-redux'

import {Board} from '../components'

const mapStateToProps = ({matrix}) => ({matrix})
export default connect(mapStateToProps)(Board)
