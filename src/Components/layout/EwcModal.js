import React from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root')
const EwcModal = (props) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <>
            <Modal
                isOpen={props.showModal}
                style={customStyles}
            >
                {props.children}
            </Modal>
        </>
    );
};

export default EwcModal;