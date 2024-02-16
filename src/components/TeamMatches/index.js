import {Component} from 'react'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamMatch: []}

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
        id: data.latest_match_details.id,
      },
    }
    this.setState({teamMatch: updateData})
  }

  renderList = () => {
    const {teamMatch} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatch

    return (
      <div>
        <img src={teamBannerUrl} alt="team-banner" />
        <LatestMatch latestMatch={latestMatchDetails} />
      </div>
    )
  }

  render() {
    return <div>{this.renderList()}</div>
  }
}

export default TeamMatches
