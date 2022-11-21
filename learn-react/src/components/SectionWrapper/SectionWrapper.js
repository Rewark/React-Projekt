import  './SectionWrapper.css'

const SectionWraper = (props) => {
  return (
    <div className='section-wrapper'>
        {props.children}
    </div>
  )
}

export default SectionWraper