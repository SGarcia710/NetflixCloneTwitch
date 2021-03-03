import React from 'react';
import './styles.scss';

function SignupInput() {
  return (
    <div className="SignupInput">
      <h6 className="SignupInput__text">
        ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresía de Netflix.
      </h6>

      <div className="EmailContainer">
        <input type="text" placeholder="Email" />
        <div className="Button">
          <p className="Button__text">Comenzar {'>'}</p>
        </div>
      </div>
    </div>
  );
}

export default SignupInput;
