import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { AutoField, AutoFields, AutoForm, SubmitField } from 'uniforms-antd';
import { getSecretSanta } from '../../services';
import ConfirmModal from '../Modal';

import { bridge as schema } from './schema';

export function GuestFormBasic() {

  const [isModalVisible, setisModalVisible] = useState(false)
  const drawNames = friends => {
    getSecretSanta(friends).then(res => {
      if (res && res.data.status === 'ok') {
        setisModalVisible(true)
      }
    })
  }

  return (
    <>
      <AutoForm schema={schema} onSubmit={drawNames}>
        <AutoFields/>
        <div style={{textAlign:'center',margin: '2% auto'}}>
        <SubmitField/>
        </div>
      </AutoForm>
      <ConfirmModal isModalVisible={isModalVisible} handleOk={()=>setisModalVisible(false)} />
    </>
  );
}
