import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamCard} = props
  const {name, teamImageUrl, id} = teamCard

  return (
    <div className="li">
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={id} className="teamImage" />
        <p className="p">{name}</p>
      </Link>
    </div>
  )
}

export default TeamCard
