import { Modal, Image, Button } from 'react-bootstrap'

const ImageModal = ({ show, setShow, imageFile, setImageFile, album }) => {
  const handleChangeImage = (dir) => {
    const idx = album.indexOf(imageFile)
    if (dir === '+') {
      if (idx === album.length - 1) {
        setImageFile(album[0])
      } else {
        setImageFile(album[idx + 1])
      }
    } else {
      if (dir === '-' && idx === 0) {
        setImageFile(album[album.length - 1])
      } else {
        setImageFile(album[idx - 1])
      }
    }
  }
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header className="border-0 mb-0 pb-0" closeButton />
      <Modal.Body className="d-flex flex-column">
        <Image src={`/images/${imageFile}`} style={{ objectFit: 'contain' }} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleChangeImage('-')}>Prev</Button>
        <Button onClick={() => handleChangeImage('+')}>Next</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ImageModal