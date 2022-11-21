import './GamingLibrary.css'

import GamingLibraryData from '../../Data/GamingLibraryData'

import { SectionHeader, SectionWrapper} from '../../components/index'

const cards = GamingLibraryData.map(card =>{
  return <Card key={card.id} image={card.image} title={card.title} category={card.category} data_added={card.data_added} hours_played={card.hours_played} download={card.download}/>
})

const GamingLibrary = () => {
  return (
    <>
    <SectionWrapper>
      <SectionHeader>Gaming Library</SectionHeader>
      <div className='gaming-library-cards'>
          {cards}
      </div>  
      </SectionWrapper>
  </>
  )
}

export default GamingLibrary