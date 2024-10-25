import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
    number: Yup.string().min(3, 'Minimum 3 characters').required('Required')
});

const ContactForm = ({ addContact }) => {
    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
            id: nanoid(),
            ...values
        };
        addContact(newContact);
        resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
                <div className={styles['input-container']}>
                    <label className={styles.label}>
                        Name
                    </label>
                    <Field name="name" type="text" className={styles.input} />
                    <ErrorMessage name="name" component="div" className={styles.error} />
                </div>

                <div className={styles['input-container']}>
                    <label className={styles.label}>
                        Number
                    </label>
                    <Field name="number" type="text" className={styles.input} />
                    <ErrorMessage name="number" component="div" className={styles.error} />
                </div>

                <button type="submit" className={styles.button}>Add contact</button>
            </Form>

        </Formik >
    );
};

export default ContactForm;
