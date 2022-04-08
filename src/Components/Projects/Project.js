import React from 'react'

export const Project = ({name, description, img, gitUrl, hostedUrl, gitApi}) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../../Assets/Projects', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className='project'>
        <img src={images[img]} alt='' onClick={()=>{window.open(hostedUrl, 'blank')}}/>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <div className="proj-btn">
            <button onClick={()=>{window.open(gitUrl, 'blank')}}>{gitApi ? 'Client Source':'Source Code' }</button>
            <button onClick={()=>{window.open(hostedUrl, 'blank')}}>Hosted Link</button>
            {gitApi ? <button onClick={()=>{window.open(gitApi, 'blank')}}>Back-End Source</button>: null}
        </ div>
    </ div>
  )
}
