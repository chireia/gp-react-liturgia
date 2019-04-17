import { Form, Input, Row, Button } from 'antd'
import { Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import * as Yup from 'yup'
import { useStore } from '../../store/helpers'
import './Login.scss'

const Login = withRouter(
  observer(props => {
    const { login, isLoged, isLoading } = useStore('authStore')

    const initialValues = {
      user: undefined,
      pin: undefined
    }

    useEffect(() => {
      if (isLoged) props.history.push('/')
    }, [isLoged])

    return (
      <div className="container">
        <section>
          <div className="img-holder">
            <img src={require('../../assets/images/igreja.png')} alt="" />
            <span>Digite suas credênciais para acessar ao sistema</span>
          </div>

          <div className="form-holder">
            <Formik
              initialValues={initialValues}
              onSubmit={values => login(values)}
              validationSchema={LoginSchema}
              validateOnBlur
            >
              {({
                handleSubmit,
                handleBlur,
                handleChange,
                errors,
                touched,
                values
              }) => {
                return (
                  <Form onSubmit={handleSubmit} className="form">
                    <Row>
                      <Form.Item
                        // label="Usuário"
                        required
                        validateStatus={
                          errors.user && touched.user ? 'error' : undefined
                        }
                        help={touched.user && errors.user}
                      >
                        <Input
                          id="user"
                          placeholder="Digite seu usuário"
                          value={values.user}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Form.Item>
                    </Row>
                    <Row>
                      <Form.Item
                        // label="Senha"
                        required
                        validateStatus={
                          errors.pin && touched.pin ? 'error' : undefined
                        }
                        help={touched.pin && errors.pin}
                      >
                        <Input
                          id="pin"
                          type="password"
                          placeholder="Digite sua Senha"
                          value={values.pin}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Form.Item>
                    </Row>
                    <Form.Item className="btn-holder">
                      <Button
                        className="form__btn"
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                      >
                        Login
                      </Button>
                    </Form.Item>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </section>
      </div>
    )
  })
)

const LoginSchema = Yup.object().shape({
  user: Yup.string().required('Usuário obrigatório'),
  pin: Yup.string().required('Senha Obrigatória')
})

export default Login
