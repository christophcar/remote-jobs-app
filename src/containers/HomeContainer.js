import Home from '../components/Home'
import { connect } from 'react-redux'
import { setSearchfield } from '../ducks/actions'

const mapStateToProps = state => ({
  jobs: filteredJobs(state)
})

const mapDispatchToProps = {
  searchChange: setSearchfield
}

const filteredJobs = state =>
  state.jobs.filter(job => {
    return (
      job.position.toLowerCase().includes(state.searchfield.toLowerCase()) ||
      job.company.toLowerCase().includes(state.searchfield.toLowerCase())
    )
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
