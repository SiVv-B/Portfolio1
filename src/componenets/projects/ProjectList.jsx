import './ProjectList.css'
import SingleProject from '../singlePrject/SingleProject'
import { projects } from '../../data'

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My projects</h1>
        <p className="pl-desc">
          I create FrontEnd applications with React, BackEnd applications with
          Node.js and MongoDB as well as FullStack MERN applications
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <SingleProject key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
