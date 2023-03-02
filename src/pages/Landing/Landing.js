import { NavLink } from 'react-router-dom';

function Landing () {
    return (
        <div id='content'>
         <p id='imageMe'></p>
         <p id='empty'></p>
         
         <p class='brandStatement'> <span id='myName'> Ildiko Dutton</span> <br/> <span id='newTitleIldi'> Fullstack Web Developer</span> <br/> Lorem ipsum dolor sit amet consectetur. Risus tempus odio fermentum suspendisse duis. Quam odio quam tristique montes ut egestas nulla at. Laoreet nibh ac quis vitae. Volutpat etiam et etiam congue morbi ut non jsjdhdh <span id='cta'> <NavLink to="/about"> Find out more </NavLink> </span> </p>

         <div className='containerLanding'>
            <div className='cards'>
                <div className='jscript card'>
                    <h2 className='card-title-large'>Javascript</h2>
                    <h3 className='card-title-small'>Javascript</h3>
                    <p className='cardDescription'>Lorem</p>
                </div>

                <div className='html card'>
                    <h2 className='card-title-large'>HTML</h2>
                    <h3 className='card-title-small'>HTML</h3>
                    <p className='cardDescription'>Lorem</p>
                </div>

                <div className='css card'>
                    <h2 className='card-title-large'>CSS</h2>
                    <h3 className='card-title-small'>CSS</h3>
                    <p className='cardDescription'>Lorem</p>
                </div>

                <div className='react card'>
                    <h2 className='card-title-large'>React</h2>
                    <h3 className='card-title-small'>React</h3>
                    <p className='cardDescription'>Lorem</p>
                </div>
                
            </div>
         </div>
         

         
        
        
        </div>
    );
}

export default Landing;