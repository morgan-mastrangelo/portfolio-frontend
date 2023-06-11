import React, {useState} from 'react';
import {css} from "@emotion/css";
import {Col, Row} from "antd";
import Swal from 'sweetalert2';
import {LoadingOutlined, SendOutlined} from "@ant-design/icons";
import {InView} from "react-intersection-observer";
import {Bounce, Fade} from "react-reveal";
import {useDispatch, useSelector} from "react-redux";
import {TextField, createTheme, outlinedInputClasses, Button, useTheme} from '@mui/material';
import {sendComment} from "../store/comment.action";
import '../styles/contact.css';
import { ThemeProvider } from '@emotion/react';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': 'grey',
            '--TextField-brandBorderHoverColor': 'grey',
            '--TextField-brandBorderFocusedColor': 'dodgerblue',
            '& label': {
              color: 'silver',
            },
            '& label.Mui-focused': {
              color: 'white',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
            color: '#DDDDDD'
          },
        },
      }
    },
  });

function Contact() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.comment);

  const parallax = css`
    min-height: 512px;
    padding: 32px;
    background-color: rgba(0,0,0,0.5);
    background-image: url('/assets/images/contact-parallax.jpg');
    background-size: cover;
    background-blend-mode: darken;
  `;

  const title1 = css`
    font-family: Arial, serif;
    font-size: 8vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    color: white;
  `;

  const title2 = css`
    font-family: Arial, serif;
    font-size: 8vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding-top: 20px;
    text-align: center;
    color: white;
  `;

  const form = css`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  `;

  const outerTheme = useTheme();

  const handleSubmit = e => {
    e.preventDefault();

    const submitData = {
      name,
      email,
      comment
    }

    setName('');
    setEmail('');
    setComment('');

    dispatch(sendComment(submitData))
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "Successfully submitted."
        })
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          text: "There goes some error."
        })
      });
  }

  return (
    <InView onChange={inView => setShow(inView)}>
      <div className={parallax} id={'contact'}>
        <Col xs={24} sm={24} md={0} lg={0}>
          {
            show && (
              <Bounce>
                <h1 className={title2}>Contact Me</h1>
              </Bounce>
            )
          }
        </Col>

        <Row style={{minHeight:512}}>
          <Col xs={0} sm={0} md={12} lg={10}>
            {
              show && (
                <Bounce>
                  <h1 className={title1}>CONTACT ME</h1>
                </Bounce>
              )
            }
          </Col>

          <Col xs={24} sm={24} md={12} lg={14}>
            {
              show && (
                <Fade delay={300}>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <form className={form} onSubmit={handleSubmit}>
                      <TextField
                        variant={'outlined'}
                        name={'name'}
                        label={'Full Name'}
                        style={{margin:'12px 0'}}
                        value={name}
                        onChange={({target:{value}}) => setName(value)}
                        required
                      />

                      <TextField
                        name={'email'}
                        label={'Email'}
                        value={email}
                        style={{margin:'12px 0'}}
                        onChange={({target:{value}}) => setEmail(value)}
                        required
                      />

                      <TextField
                        variant={'outlined'}
                        rows={7}
                        name={'comment'}
                        label={'Type here...'}
                        color={'success'}
                        value={comment}
                        style={{margin:'12px 0 24px 0'}}
                        onChange={({target:{value}}) => setComment(value)}
                        required
                        multiline
                      />

                      <Button
                        variant='contained'
                        style={{padding:16,background:'linear-gradient(135deg, rgb(181, 143, 255), rgb(163, 71, 245))',fontSize:20,fontWeight:'bold'}}
                      >
                        {
                          isLoading ? <LoadingOutlined /> : <SendOutlined />
                        }
                        &nbsp;SEND
                      </Button>
                    </form>
                  </ThemeProvider>
                </Fade>
              )
            }
          </Col>
        </Row>
      </div>
    </InView>
  )
}

export default Contact;