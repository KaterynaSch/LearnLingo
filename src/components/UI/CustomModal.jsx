import Modal from 'react-modal';

Modal.setAppElement('#root');

const defaultStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 26, 21, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '30px',
    padding: 0,
  },
};

const secondaryStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 26, 21, 0.6)',
  },
  content: {
    top: 0,
    right: 0,
    left: 'auto',
    bottom: 'auto',
    border: 'none',
    borderRadius: '12px',
    padding: 0,
  },
};

export const CustomModal = ({ children, isOpen, onClose, styleVariant }) => {
  const selectedStyles =
    styleVariant === 'default' ? defaultStyles : secondaryStyles;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={selectedStyles}
      preventScroll={true}
    >
      {children}
    </Modal>
  );
};
