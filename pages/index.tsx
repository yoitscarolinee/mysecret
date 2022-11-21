import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { FaEye } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useState } from 'react';

const Home: NextPage = () => {
  const [firstStep, setFirstStep] = useState(false);
  const [secondStep, setSecondStep] = useState(false);
  const [secretMessage, setSecretMessage] = useState('');
  const [charAmount, setCharAmount] = useState(0)

  const handleMessageChange = (event: any) => {
    setSecretMessage(event.target.value);
    setCharAmount(event.target.value.length)

    console.log(secretMessage, charAmount)
  }

  const handleFirstStep = (e: any) => {
    setFirstStep(!firstStep)
  }

  return (
    <GlobalWrapper>
      <Head>
        <title>MySecret</title>
        <meta name="description" content="MySecret" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Wrapper1 done={firstStep}>
        
        <Logo>

          <Image
            src="/logoSlogan.svg"
            sizes=''
            layout="fill"
            alt="Logo"
          />

        </Logo>
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <Button onClick={handleFirstStep}><FaEye />Write something</Button>
        </IconContext.Provider>

      </Wrapper1>

      <Wrapper2 firstStep={firstStep}>

        <Heading>

          <Title>
            Write down a <span>secret</span> of yours
          </Title>

          <Subtitle>
            Your secret will be deleted as soon as another person reads it.
          </Subtitle>

        </Heading>

        <InputWrapper>

          <CharacterCount>
            {charAmount}/1000
          </CharacterCount>

          <BottomSection>

            <BottomLogo>

              <Image src="/logo.svg"
                sizes=''
                layout="fill"
                alt="Logo" />

            </BottomLogo>

            <SubmitButton>
              SUBMIT
            </SubmitButton>

          </BottomSection>

          <SecretInput
            spellCheck='false'
            onChange={handleMessageChange}
            placeholder="Write here..."
            value={secretMessage}
            maxLength={1000}
          >


          </SecretInput>

        </InputWrapper>

      </Wrapper2>

    </GlobalWrapper>
  )
}

export default Home

const BottomLogo = styled.div`
    height: 10px;
    width: 100px;
    position: relative;
    `;

const SubmitButton = styled.button`
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 1.1em;
    color: var(--main);
    cursor: pointer;
    
    &:hover {
      filter: brightness(85%);
    }
    `;

const BottomSection = styled.div`
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

const CharacterCount = styled.div`
    position: absolute;
    right: 10px;
    font-size: 0.8em;
    opacity: 0.2;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const Title = styled.h2`
    height: 50%;
    width: 100%;
    
    `
const Subtitle = styled.p`
    height: 50%;
    width: 100%;
    opacity: 0.5;
    `

const InputWrapper = styled.div`
    width: 100%;
    height: calc(100% - 10vh - 30px);
    margin-bottom: 5px;
    position: relative;
    `;

const Heading = styled.div`
    width:100%;
    height: 10vh;
    margin-bottom: 15px;
    `;

const SecretInput = styled.textarea`
    width: 100%;
    height: calc(100% - 25px);
    border: 0;
    border-radius: 10px;
    outline: none;
    padding: 35px;
    font-family: 'Montserrat', sans-serif;
    background: rgb(23,54,74);
    background: linear-gradient(0deg, rgba(23,54,74,1) 0%, rgba(27,37,46,1) 100%);
    resize: none;
    color: var(--white);
    `;

const Wrapper2 = styled.div<{ firstStep?: boolean, secondStep?: boolean }>`
    position: absolute;
    width: 100vw;
    max-width: 420px;
    height: 100vh;
    background-color: var(--black);
    padding: 50px 30px;
    transition: top 1500ms;
    transition-timing-function: ease-in-out;
    top: ${props => props.firstStep ? '0px' : '100vh'};
`;

const Button = styled.div`
    position: absolute;
    background-color: var(--main);
    border-radius: 100px;
    padding: 10px 25px;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    user-select: none;
    transition: 300ms;
    font-weight: 600;
    
    &:hover {
      padding: 10px 30px;
    }
    `;

const Logo = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 80px;
    `;

const Wrapper1 = styled.div<{ done?: boolean }>`
    padding: 50px 30px;
    width: 100vw;
    max-width: 420px;
    height: 100vh;
    background-color: var(--black);
    position: absolute;
    transition: bottom 1500ms;
    transition-timing-function: ease-in-out;
    bottom: ${props => props.done ? '100vh' : '0'};
    `

const GlobalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--black);
    `;


