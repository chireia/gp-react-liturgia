import {
  Button,
  Col,
  Form,
  Icon,
  Input,
  InputNumber,
  Row,
  Select,
  Spin
} from 'antd'
import { Formik } from 'formik'
import React from 'react'
import Yup from '../../shared/yup-ptBr'
import { ColabFormChecks } from './ColabFormChecks'

const Option = Select.Option

export const ColabForm = ({ onSave, initialValues, isLoadingSingle }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => onSave(values)}
      validationSchema={ColabFormSchema}
      enableReinitialize
    >
      {props => {
        const {
          values,
          errors,
          handleSubmit,
          handleChange,
          handleReset,
          setFieldValue
        } = props
        return (
          <Spin spinning={isLoadingSingle} indicator={antIcon}>
            <Form onSubmit={handleSubmit}>
              <Row gutter={14}>
                <Col span={12}>
                  <Form.Item
                    required
                    label="Nome"
                    validateStatus={errors.nome ? 'error' : ''}
                    help={errors.nome ? errors.nome : ''}
                  >
                    <Input
                      id="nome"
                      value={values.nome}
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    required
                    label="Função"
                    validateStatus={errors.funcao ? 'error' : ''}
                    help={errors.funcao ? errors.funcao : ''}
                  >
                    <Select
                      id="funcao"
                      value={values.funcao}
                      onChange={v => setFieldValue('funcao', v)}
                      placeholder="Selecione"
                    >
                      <Option value="leitor">Leitor</Option>
                      <Option value="comentarista">Comentarista</Option>
                      <Option value="ambos">Ambos</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              {/* <DisplayFormikState {...props} /> */}
              <Row gutter={14}>
                <Col span={12}>
                  <Form.Item
                    label="Idade"
                    validateStatus={errors.idade ? 'error' : ''}
                    help={errors.idade ? errors.idade : ''}
                  >
                    <InputNumber
                      value={values.idade}
                      onChange={v => setFieldValue('idade', v)}
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    required
                    label="Celular"
                    validateStatus={errors.celular ? 'error' : ''}
                    help={errors.celular ? errors.celular : ''}
                  >
                    <InputNumber
                      id="celular"
                      value={values.celular}
                      onChange={v => setFieldValue('celular', v)}
                      style={{ width: '100%' }}
                      max={99999999999}
                      formatter={v => cellFormatter(v)}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Form.Item label="Disponibilidade">
                  <ColabFormChecks values={values} />
                </Form.Item>
              </Row>
              <Row style={{textAlign: 'center'}}>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ marginRight: 14, width: 85 }}
                >
                  Salvar
                </Button>

                <Button
                  onClick={handleReset}
                  type="danger"
                  style={{ width: 85 }}
                >
                  Resetar
                </Button>
              </Row>
            </Form>
          </Spin>
        )
      }}
    </Formik>
  )
}

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

// const DisplayFormikState = props => (
//   <div style={{ margin: '1rem 0' }}>
//     <h3 style={{ fontFamily: 'monospace' }} />
//     <pre
//       style={{
//         background: '#f6f8fa',
//         fontSize: '.65rem',
//         padding: '.5rem'
//       }}
//     >
//       <strong>props</strong> = {JSON.stringify(props, null, 2)}
//     </pre>
//   </div>
// )

const cellFormatter = v => {
  if (v.length === 0) {
    return v
  }
  if (v.length <= 10) {
    return `(${v.substring(0, 2)}) ${v.substring(2, 6)} ${v.substring(6, 10)}`
  } else {
    return `(${v.substring(0, 2)}) ${v.substring(2, 7)} ${v.substring(7, 11)}`
  }
}

const ColabFormSchema = Yup.object().shape({
  nome: Yup.string().required('Nome obrigatório'),
  funcao: Yup.string().required('Função necessária'),
  celular: Yup.string()
    .max(11)
    .required('Celular obrigatório')
    .matches(/^\d{2}\d{8}$|^\d{2}9\d{8}$/, 'Formado inválido')
    .nullable(true),
  diaDisp: Yup.object()
})
