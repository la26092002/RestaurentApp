import React from 'react';

const AboutBody = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 my-auto">
            <h1>Bena</h1>
            <h5>Bena c'est une entreprise présente dans de nombreuses régions.</h5>
            <h5>Si vous souhaitez être l'un de nos partenaires, veuillez nous contacter par e-mail </h5>
            <h6 style={{fontFamily:'cursive'}}>bena.service@bena.com</h6>
          </div>
          <div className="col-12 col-md-6 col-lg-6  my-auto p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3240.6611396441767!2d-0.6166585999999998!3d35.6853449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAlg%C3%A9rie%20Poste%20algerie%20!5e0!3m2!1sen!2sdz!4v1691282429928!5m2!1sen!2sdz"
              width="600"
              height="450"
              style={{ border: 0 ,borderRadius:'20px'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
