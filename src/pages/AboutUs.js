import React from 'react'

export default function AboutUs() {
  return (
    <div>
      <div
				className='container'
				style={{ marginBottom: `50px`, marginTop: `30px` }}>
				<h1 style={{ textAlign: `center`, marginBottom: `30px` }}>
					Our Key Features
				</h1>
				<div className='row'>
					<div className='col heart featureclass'>
						<img src={require('./Icons/Cardio.png')} alt='Cardio' />
						<br />
						<br />
						<h3>Cardiology</h3>
					</div>
					<div className='col bone featureclass'>
						<img src={require('./Icons/Ortho.png')} alt='Ortho' />
						<br />
						<br />
						<h3>Orthopaedic</h3>
					</div>
					<div className='col brain featureclass'>
						<img src={require('./Icons/Neuro.png')} alt='Neuro' />
						<br />
						<br />
						<h3>Neurology</h3>
					</div>
				</div>
				<div className='row'>
					<div className='col medicine featureclass'>
						<img src={require('./Icons/Pharma.png')} alt='Pharma' />
						<br />
						<br />
						<h3>Pharma Pipeline</h3>
					</div>
					<div className='col team featureclass'>
						<img src={require('./Icons/PharmaTeam.png')} alt='PharmaTeam' />
						<br />
						<br />
						<h3>Pharma Team</h3>
					</div>
					<div className='col treatment featureclass'>
						<img src={require('./Icons/Like.png')} alt='like' />
						<br />
						<br />
						<h3>High Quality Treatments</h3>
					</div>
				</div>
			</div>
    </div>
  )
}
