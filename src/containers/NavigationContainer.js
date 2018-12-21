import Navigation from '../components/Navigation'
import { connect } from 'react-redux'
import { setSearchfield } from '../ducks/actions'

const mapDispatchToProps = {
  searchChange: setSearchfield
}

export default connect(
  null,
  mapDispatchToProps
)(Navigation)
