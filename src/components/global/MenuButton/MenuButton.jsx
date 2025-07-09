import { Button } from 'react-bootstrap'

const MenuButton = ({ setTab, tab, selected, setSelected }) => {

  const handleClick = (e) => {
    setTab(e)
    setSelected(e)
  }

  return (
    <Button 
      className={`d-flex w-100 rounded-0 border-bottom border-primary-hover align-items-center grad-vertical ps-24 py-8 fs-5 ${selected === tab ? 'text-secondary' : 'text-primary'}`}
      variant={selected === tab ? 'secondary' : 'primary'}
      onClick={() => handleClick(tab)}
    >
      <p className="mb-0">{tab}</p>
    </Button>
  )
}

export default MenuButton