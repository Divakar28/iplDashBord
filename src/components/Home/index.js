import {Component} from 'react'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamData: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamData: updatedData})
  }

  render() {
    const {teamData} = this.state

    return (
      <div className="bg">
        <div className="l">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="h">IPL Dashboard</h1>
        </div>
        <div className="lio">
          {teamData.map(each => (
            <TeamCard key={each.id} teamCard={each} />
          ))}
        </div>
      </div>
    )
  }
}
export default Home
