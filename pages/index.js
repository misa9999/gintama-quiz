import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Button from '../src/components/Button';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Gintama - Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Gintama</h1>
          </Widget.Header>

          <Widget.Content>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
            }}
            >
              <Input 
                name="userName"
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name" 
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Play ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
              <h1>Quiz:</h1>
              <p>DESCRIPTION</p>
            </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/yuukiasuna00/gintama-quiz"/>
    </QuizBackground>
  );
}
