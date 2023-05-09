import Background from '../assets/images/cars_in_garage.jpg'

function About() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-90 text-black rounded'>The Car Inventory allows you to create a list of your cars</h3>
        </div>
    </div>
  )
}

export default About