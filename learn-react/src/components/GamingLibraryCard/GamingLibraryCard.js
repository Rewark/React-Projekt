import './GamingLibraryCard.css'

const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card'>
        <ul>
            <li><image src={props.image} alt=""/> </li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Data Added</h4><span>{props.data_added}</span></li>
            <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
            <li><h4>Library</h4><span>{props.download}</span></li>
            <div className='main-button'>
                <a href="/#">Downloded</a>
            </div>
        </ul>
    </div>
  )
}

export default GamingLibraryCard