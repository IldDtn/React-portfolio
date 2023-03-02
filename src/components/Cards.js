function Cards () {
    return (
         <div className='containerLanding'>
            <div className='cards'>
                <div className='jscript card'>
                    <h2 className='card-title-large'>Javascript</h2>
                    <h3 className='card-title-small'>Javascript</h3>
                    <p className='cardDescription'>ES6 and legacy code, jQuery, API requests</p>
                </div>

                <div className='html card'>
                    <h2 className='card-title-large'>HTML</h2>
                    <h3 className='card-title-small'>HTML</h3>
                    <p className='cardDescription'>HTML5 features</p>
                </div>

                <div className='css card'>
                    <h2 className='card-title-large'>CSS</h2>
                    <h3 className='card-title-small'>CSS</h3>
                    <p className='cardDescription'>CSS3 features, bootstrap</p>
                </div>

                <div className='react card'>
                    <h2 className='card-title-large'>React</h2>
                    <h3 className='card-title-small'>React</h3>
                    <p className='cardDescription'>Lorem</p>
                </div>

                <div className='python card'>
                    <h2 className='card-title-large'>Python</h2>
                    <h3 className='card-title-small'>Python</h3>
                    <p className='cardDescription'>Jupyter notebook, pandas, data analytics</p>
                </div>

                <div className='sql card'>
                    <h2 className='card-title-large'>postgreSQL</h2>
                    <h3 className='card-title-small'>postgreSQL</h3>
                    <p className='cardDescription'>Database queries and design principles </p>
                </div>

                <div className='node card'>
                    <h2 className='card-title-large'>Node.js</h2>
                    <h3 className='card-title-small'>Node.js</h3>
                    <p className='cardDescription'>Lorem</p>
                </div>

                <div className='github card'>
                    <h2 className='card-title-large'>GitHub</h2>
                    <h3 className='card-title-small'>Github</h3>
                    <p className='cardDescription'>Lorem</p>
                </div>
                
            </div>
         
        </div>
    );
}

export default Cards;