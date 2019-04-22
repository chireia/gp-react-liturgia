import { Checkbox, Col, Row } from 'antd'
import { FieldArray } from 'formik'
import React from 'react'

export const ColabFormChecks = ({ values }) => {
  function toggleCheck(target, arrayHelpers) {
    if (target.checked) {
      arrayHelpers.push(target.value)
    } else {
      arrayHelpers.remove(values.diaDisp[target.name].indexOf(target.value))
    }
  }

  return (
    <Row>
      <Col span={6}>Domingo: </Col>
      <FieldArray
        name="diaDisp.domingo"
        render={arrayHelpers => (
          <>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="domingo"
                value="manha"
                checked={values.diaDisp.domingo.includes('manha')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Manhã
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="domingo"
                value="tarde"
                checked={values.diaDisp.domingo.includes('tarde')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Tarde
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="domingo"
                value="noite"
                checked={values.diaDisp.domingo.includes('noite')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Noite
              </Checkbox>
            </Col>
          </>
        )}
      />
      <Col span={6}>Segunda: </Col>
      <FieldArray
        name="diaDisp.segunda"
        render={arrayHelpers => (
          <>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="segunda"
                value="manha"
                checked={values.diaDisp.segunda.includes('manha')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Manhã
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="segunda"
                value="tarde"
                checked={values.diaDisp.segunda.includes('tarde')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Tarde
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="segunda"
                value="noite"
                checked={values.diaDisp.segunda.includes('noite')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Noite
              </Checkbox>
            </Col>
          </>
        )}
      />
      <Col span={6}>Terça: </Col>
      <FieldArray
        name="diaDisp.terca"
        render={arrayHelpers => (
          <>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="terca"
                value="manha"
                checked={values.diaDisp.terca.includes('manha')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Manhã
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="terca"
                value="tarde"
                checked={values.diaDisp.terca.includes('tarde')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Tarde
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="terca"
                value="noite"
                checked={values.diaDisp.terca.includes('noite')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Noite
              </Checkbox>
            </Col>
          </>
        )}
      />
      <Col span={6}>Quarta: </Col>
      <FieldArray
        name="diaDisp.quarta"
        render={arrayHelpers => (
          <>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="quarta"
                value="manha"
                checked={values.diaDisp.quarta.includes('manha')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Manhã
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="quarta"
                value="tarde"
                checked={values.diaDisp.quarta.includes('tarde')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Tarde
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="quarta"
                value="noite"
                checked={values.diaDisp.quarta.includes('noite')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Noite
              </Checkbox>
            </Col>
          </>
        )}
      />
      <Col span={6}>Quinta: </Col>
      <FieldArray
        name="diaDisp.quinta"
        render={arrayHelpers => (
          <>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="quinta"
                value="manha"
                checked={values.diaDisp.quinta.includes('manha')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Manhã
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="quinta"
                value="tarde"
                checked={values.diaDisp.quinta.includes('tarde')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Tarde
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="quinta"
                value="noite"
                checked={values.diaDisp.quinta.includes('noite')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Noite
              </Checkbox>
            </Col>
          </>
        )}
      />
      <Col span={6}>Sexta: </Col>
      <FieldArray
        name="diaDisp.sexta"
        render={arrayHelpers => (
          <>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="sexta"
                value="manha"
                checked={values.diaDisp.sexta.includes('manha')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Manhã
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="sexta"
                value="tarde"
                checked={values.diaDisp.sexta.includes('tarde')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Tarde
              </Checkbox>
            </Col>
            <Col span={6} style={{ textAlign: 'center' }}>
              <Checkbox
                name="sexta"
                value="noite"
                checked={values.diaDisp.sexta.includes('noite')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Noite
              </Checkbox>
            </Col>
          </>
        )}
      />
      <Col span={6}>Sábado: </Col>
      <FieldArray
        name="diaDisp.sabado"
        render={arrayHelpers => (
          <>
            <Col span={6} style={{textAlign: 'center'}}>
              <Checkbox
                name="sabado"
                value="manha"
                checked={values.diaDisp.sabado.includes('manha')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Manhã
              </Checkbox>
            </Col>
            <Col span={6} style={{textAlign: 'center'}}>
              <Checkbox
                name="sabado"
                value="tarde"
                checked={values.diaDisp.sabado.includes('tarde')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Tarde
              </Checkbox>
            </Col>
            <Col span={6} style={{textAlign: 'center'}}>
              <Checkbox
                name="sabado"
                value="noite"
                checked={values.diaDisp.sabado.includes('noite')}
                onChange={e => toggleCheck(e.target, arrayHelpers)}
              >
                Noite
              </Checkbox>
            </Col>
          </>
        )}
      />
    </Row>
  )
}
