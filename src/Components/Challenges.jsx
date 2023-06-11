import {Link} from 'react-router-dom'

const ChallengesStyle = {
  display: 'flex',
  placeContent: 'center',
  margin: '0',
  backgroundImage: 'linear-gradient(135deg, #9796f0 10%, #FBC7D4 100%)'
}

// const States = () => <h2>States Component</h2>;
// const Props = () => <h2>Props Component</h2>;
// const Classes = () => <h2>Classes Component</h2>;
// const HOC = () => <h2>Higher Order Components Component</h2>;
// const ReactRouter = () => <h2>React Router Component</h2>;
// const ReactHooks = () => <h2>React Hooks Component</h2>;

const ChallengesList = () => {

  return(
  <div style={ChallengesStyle}>
    <h1 style={{top: '0'}}>List of Challenges</h1>
    <h3 style={{marginTop: '10px', left: '0', right: '0', position: 'fixed', textAlign: 'center', height: '50%', bottom: '0'}}>
      <ul style={{listStyleType: 'none'}}>
        <li><Link to='/challenges/states'>States</Link></li>
        <li><Link to='/challenges/props'>Props</Link></li>
        <li><Link to='/challenges/classes'>Classes</Link></li>
        <li><Link to='/challenges/hoc'>Higher Order Components</Link></li>
        <li><Link to='/challenges/react-router'>React Router</Link></li>
        <li><Link to='/challenges/react-hooks'>React Hooks</Link></li>
      </ul>
    </h3>
  </div>
)
  }




const Challenges = () => {

  return (
    <div>
      <h1>30 Days Of React Challenge</h1>
      <ChallengesList />
    </div>
  )
}

export default Challenges