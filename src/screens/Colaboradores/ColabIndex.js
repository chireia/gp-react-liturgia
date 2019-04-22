import { Button, Col, Row } from 'antd'
import React from 'react'
import { Holder, HolderTitle } from '../../components/styled/Holder'
import { ColabList } from './ColabList'
import { ColabPanel } from './ColabPanel'
import { Link } from "react-router-dom";

export const ColabIndex = () => {
  return (
    <Row gutter={14}>
      <Col span={12}>
        <Holder>
          <HolderTitle>
            Colaboradores
            <Link to={'/colaboradores/novo'}>
              <Button type="primary" style={{ float: 'right', bottom: 8 }}>
                Adicionar
              </Button>
            </Link>
          </HolderTitle>
          <ColabList />
        </Holder>
      </Col>
      <Col span={12}>
        <ColabPanel />
      </Col>
    </Row>
  )
}
