import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuiZPage({ externalDb }) {
  return (
      <ThemeProvider theme={externalDb.theme}>
        <QuizScreen 
          externalQuestions={externalDb.questions}
          externalBg={externalDb.bg}
        />
      </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const externalDb = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((serverResponse) => {
        if (serverResponse.ok) {
  
          return serverResponse.json()
        }
        throw new Error('error');
      })
      .then((responseConvertedToObject) => responseConvertedToObject)
      // .catch((err) => {
      //   console.error(err)
      // });
  
    // console.log(externalDb);
    return {
      props: {
        externalDb,
      },
    };
  } catch(err) {
    throw new Error(err);
  }
}