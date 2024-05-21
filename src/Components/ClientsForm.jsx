import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { IoBusiness } from 'react-icons/io5'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { v4 as uuidv4 } from 'uuid'
import * as formik from 'formik'
import * as yup from 'yup'

export function ClientForm({ data, buttonText, handleData }) {
  const { Formik } = formik

  const schema = yup.object().shape({
    NombreComercial: yup.string().required('Nombre Comercial required'),
    Telefono: yup
      .number()
      .required('Teléfono is required')
      .test(
        'len',
        'Teléfono must be 10 digits',
        (val) => String(val).length === 10,
      ),
    Correo: yup
      .string()
      .required('Correo is required')
      .email('Invalid email format'),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  })
  const handleSubmit = (values) => {
    const newData = values.id
      ? values
      : {
          NombreComercial: values.NombreComercial,
          Telefono: values.Telefono,
          Correo: values.Correo,
          terms: values.terms,
        }
    handleData(newData)
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        id: data && data.id ? data.id : uuidv4(),
        NombreComercial: data.NombreComercial,
        Telefono: data.Telefono,
        Correo: data.Correo,
        terms: data.terms || false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormikNombreComercial"
            >
              <Form.Label>Nombre Comercial</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <IoBusiness />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Nombre Comercial"
                  aria-describedby="inputGroupPrepend"
                  name="NombreComercial"
                  value={values.NombreComercial}
                  onChange={handleChange}
                  isInvalid={!!errors.NombreComercial}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.Correo}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormikTelefono">
              <Form.Label>Teléfono</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend2">
                  <FaPhoneSquareAlt />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Telefono"
                  aria-describedby="inputGroupPrepend"
                  name="Telefono"
                  value={values.Telefono}
                  onChange={handleChange}
                  isInvalid={!!errors.Telefono}
                  isValid={touched.Telefono && !errors.Telefono}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.Telefono}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="validationFormikCorreo">
              <Form.Label>Correo</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <IoMdMail />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Correo"
                  aria-describedby="inputGroupPrepend"
                  name="Correo"
                  value={values.Correo}
                  onChange={handleChange}
                  isInvalid={!!errors.Correo}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.Correo}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">{buttonText}</Button>
        </Form>
      )}
    </Formik>
  )
}
