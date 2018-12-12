import SubPage from './SubPage'
import { connect } from 'react-redux'

const mapStateToProps = (state, { match }) => ({
  filtered: filtered(state, match.params.id)
})

function filtered(state, id) {
  return state.jobs.find(job => job.id === id)
}

export default connect(mapStateToProps)(SubPage)
