import React, { useState } from "react";

import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const viaCallSubmission = ()=>{
    console.log('This is from call Submission');
  }

  const handleInput = (e)=>{
    setFormData(FormData => {
      return {
        ...FormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const submissionEventHandle = (e)=>{
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className={`${styles.contact_wrapper} container`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<BsTelephoneFill />} onClick={viaCallSubmission} />
        </div>
        <Button outline={true} text="VIA EMAIL FORM" icon={<MdMessage />} />

        <form onSubmit={submissionEventHandle}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInput}/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInput}/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Text</label>
            <textarea name="text" value={formData.message} onChange={handleInput}></textarea>
          </div>
          <div className={styles.submit_btn}>
            <Button text="Submit" type="submit"/>
          </div>
        </form>
        <p>Name: {formData.name}| Email: {formData.email}</p>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/contact.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
