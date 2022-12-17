import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import Input from '../Input/Input';
import styles from './contact.module.scss';

const Contact = () => {
    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        message: ''
    })
    const form = useRef();

    const inputs = [
        {
            id: 1,
            label: 'Name:',
            name: 'user_name',
            placeholder: 'Enter your name',
            type: 'text',
            required: true,
            pattern: '^[A-Za-z]{1,25}$',
            errMsg: 'Name should be 1-25 characters & should not include any special character!',
        },
        {
            id: 2,
            label: 'Email:',
            name: 'user_email',
            placeholder: 'example@gmail.com',
            type: 'email',
            required: true,
            errMsg: 'Email should be a valid email address!',
        },
    ]

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.current);

        // email not sending 
        try {
            emailjs.send('service_gyak6tc', 'template_u1khvsb', form.current, 'xFCXJaziIzO_vQ1c5')
            .then((result) => {
                console.log(result.text);
            }), (err) => {
                console.log(err.text);
            }

            console.log('send succssfully');
        } catch (error) {
            console.log('err' + error);
        }
    }

  return (
    <div className={styles.contact_sec}>
        <HeaderTitle title="Get In Touch" />
        <div className={styles.contact_sec_main}>
            <form className={styles.contact_form} ref={form} onSubmit={handleSubmit}>
                <div className={styles.contact_from_top}>
                    {inputs.map((input) => {
                        return <Input key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
                    })}
                </div>

                <label >Message:</label>
                <textarea name="message" id="" cols="55" rows="10" placeholder='Leave a message..' required="true" ></textarea>

                <input type="submit" value="Send" className={styles.submit_btn} />
            </form>
        </div>
    </div>
  )
}

export default Contact