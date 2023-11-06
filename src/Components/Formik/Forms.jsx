import React from 'react';
import Styles from './form.module.css'
import { Formik, Form, Field,ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import CustomInputField from './CustomeInput/MuiInput';
const validationSchema = Yup.object().shape({
  photo: Yup.string().required('Photo is required'),
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  radio: Yup.string().required('Please Select Radio Button'),   
});

const Forms = () => {
  const initialValues = {
    photo:'',
    name: '',
    email: '',
    phone: '',
    radio:'',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} 
      >
        <Form>
         <section className={Styles.Page}>
          <article className={Styles.innerPage}>
           <h1 className={Styles.MainHead}>Registration Form</h1>
           <div className={Styles.container}>
           <div><Field type="file" name="photo"/></div>
            <ErrorMessage name="photo" component="div"  className={Styles.ErrorMessage}/>
           </div>
           <div className={Styles.container}>
           <div><Field name="name" label="Name" component={CustomInputField}/></div>
            <ErrorMessage name="name" component="div"  className={Styles.ErrorMessage}/>
           </div>
           <div className={Styles.container}>
           <div><Field name="email" label="Email" component={CustomInputField} /></div>
           <ErrorMessage name="email" component="div" className={Styles.ErrorMessage} />
           </div>
           <div className={Styles.container}>
           <div><Field name="phone" label="Phone" component={CustomInputField} /></div>
           <ErrorMessage name="phone" component="div" className={Styles.ErrorMessage} />
           </div>
           <div className={Styles.container}>
             <div  className={Styles.radioBtnOuter}>
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

           <div className={Styles.container}>
           <div id={Styles.BtnOuter}><button type="submit" className={Styles.subBtn}>Submit</button></div>
           </div>
           </article>
         </section>
        </Form>
      </Formik>
    </div>
  );
};

export default Forms;


