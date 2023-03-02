import { NavLink } from 'react-router-dom';

function Landing () {
    return (
        <div id='content'>
          <p id='imageMe'></p>
          <p id='empty'></p>
         
          <p class='brandStatement'> <span id='myName'> Ildiko Dutton</span> <br/> <span id='newTitleIldi'> Fullstack Web Developer</span> <br/> Lorem ipsum dolor sit amet consectetur. Risus tempus odio fermentum suspendisse duis. Quam odio quam tristique montes ut egestas nulla at. Laoreet nibh ac quis vitae. Volutpat etiam et etiam congue morbi ut non jsjdhdh <span id='cta'> <NavLink to="/about"> Find out more </NavLink> </span> </p>    
        </div>
        
    );
}

export default Landing;