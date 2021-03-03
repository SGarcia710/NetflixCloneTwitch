import React from 'react';
import './styles.scss';
import Question from '../Question';
import SignupInput from '../SingupInput';

const DATA = [
  {
    title: '¿Qué es Netflix?',
    answer: (
      <>
        Netflix es un servicio de streaming que ofrece una gran variedad de
        películas, series y documentales premiados en casi cualquier pantalla
        conectada a internet.
        <br />
        <br />
        Todo lo que quieras ver, sin límites ni comerciales, a un costo muy
        accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se
        agregan más películas y series!
      </>
    ),
  },
  {
    title: '¿Cuánto cuesta Netflix?',
    answer: (
      <>
        Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o
        dispositivo de streaming, todo por una tarifa plana mensual. Planes
        desde $ 16.900 hasta $ 38.900 al mes. Sin costos adicionales ni
        contratos.
      </>
    ),
  },
  {
    title: '¿Dónde puedo ver Netflix?',
    answer: (
      <>
        Ve donde quieras, cuando quieras y en todos los dispositivos que
        quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al
        instante a través de netflix.com desde tu computadora personal o en
        cualquier dispositivo con conexión a internet que cuente con la app de
        Netflix, como smart TV, smartphones, tablets, reproductores multimedia y
        consolas de juegos.
        <br />
        <br />
        Además, puedes descargar tus series favoritas con iOS, Android o la app
        para Windows 10. Con la función de descarga, puedes ver donde vayas y
        sin conexión a internet. Lleva Netflix contigo adonde sea.
      </>
    ),
  },
  {
    title: '¿Cómo cancelo?',
    answer: (
      <>
        Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la
        membresía online con solo dos clics. No hay cargos por cancelación.
        Empieza y termina cuando quieras.
      </>
    ),
  },
  {
    title: '¿Qué puedo ver en Netflix?',
    answer: (
      <>
        Netflix tiene un amplio catálogo de películas, series, documentales,
        animes, originales premiados y más. Todo lo que quieras ver, cuando
        quieras.
      </>
    ),
  },
];

function QnA() {
  return (
    <div className="QnA">
      <h1 className="QnA__title">Preguntas frecuentes</h1>
      <div className="QnA__questions">
        {React.Children.toArray(
          DATA.map((item) => {
            return <Question {...item} />;
          })
        )}
      </div>
      <SignupInput />
    </div>
  );
}

export default QnA;
