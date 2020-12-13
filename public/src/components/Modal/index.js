import Modal from 'antd/lib/modal/Modal'
import React from 'react'

export default function ConfirmModal({isModalVisible, handleOk}) {
    return (
        <div>
            <Modal
                title="You Have Mail!"
                visible={isModalVisible}
                onOk={handleOk}
                okText="AWESOME"
            >
                <p>Yay! Your amazing group has finished selecting their Secret Santas. Ask everyone to check their E-mails to see who they have to send a gift to this Christmas! Don't be stingy and don't be lame. Merry Christmas!</p>
            </Modal>
        </div>
    )
}
