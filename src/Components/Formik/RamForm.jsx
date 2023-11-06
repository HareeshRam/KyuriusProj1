import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Styles from './form.module.css'
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  photo: Yup.string().required('Photo is required'),
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone Number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  radio: Yup.string().required('Please select the radio button'),
});

const initialValues = {
  photo: '',
  name: '',
  phone: '',
  email: '',
  radio: '',
};

const Forms = () => {

  const onSubmit = (values,{ resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
   <div>
    <section className={Styles.Page}>
    <article className={Styles.innerPage}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>

       <h1 className={Styles.MainHead}>Registration Form</h1>

          <div className={Styles.container}>
            <label htmlFor="photo">Photo</label>
            <Field type="file" id="photo" name="photo" />
            <ErrorMessage name="photo" component="div" className={Styles.ErrorMessage} />
          </div>

          <div className={Styles.container}>
            <label htmlFor="name">Name</label>
            <div><Field type="text" id="name" name="name" className={Styles.Inp1}/></div>
            <ErrorMessage name="name" component="div" className={Styles.ErrorMessage} />
          </div>

          <div className={Styles.container}>
            <label htmlFor="phone">Phone</label>
            <div><Field type="number" id="phone" name="phone" className={Styles.Inp1}/></div>
            <ErrorMessage name="phone" component="div" className={Styles.ErrorMessage} />
          </div>

          <div className={Styles.container}>
            <label htmlFor="email">Email</label>
            <div><Field type="text" id="email" name="email" className={Styles.Inp1} /></div>
            <ErrorMessage name="email" component="div" className={Styles.ErrorMessage} />
          </div>
          <div className={Styles.container}>
            <div role="group" aria-labelledby="my-radio-group" className={Styles.radioBtnOuter}>
              <label>
                <Field type="radio" name="radio" value="Male" />
                Male
              </label>
              <label>
                <Field type="radio" name="radio" value="Female" />
                Female
              </label>
            </div>
               <ErrorMessage name="radio" component="div" className={Styles.ErrorMessage} />
            </div>

          <div className={Styles.container} id={Styles.BtnOuter}>
            <button type="submit" disabled={isSubmitting} className={Styles.subBtn}>
              Submit
            </button>
          </div>
        </Form>
        )} 
    </Formik>
    </article>
    </section>
   </div>
  );
};

export default Forms;
