import React, {useState} from 'react';
import {css} from "@emotion/css";
import {Col, Modal, Row} from "antd";
import Button from "../components/Button";
import '../styles/contact.css';
import {LoadingOutlined, SendOutlined} from "@ant-design/icons";
import {InView} from "react-intersection-observer";
import {Bounce, Fade} from "react-reveal";
import {useDispatch, useSelector} from "react-redux";
import {sendComment} from "../store/comment.action";

function Contact() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

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
        setModalText('Successfully Submitted.');
        setModalOpen(true);
      })
      .catch(() => {
        setModalText('There caused some Error.');
        setModalOpen(true);
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

        <Modal
          open={modalOpen}
          onCancel={()=>setModalOpen(false)}
          onOk={()=>setModalOpen(false)}
        >
          {modalText}
        </Modal>

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
                  <form className={form} onSubmit={handleSubmit}>
                    <input
                      name={'name'}
                      placeholder={'Full Name'}
                      className={'contact-input'}
                      value={name}
                      required
                      onChange={({target:{value}}) => setName(value)}
                    />

                    <input
                      name={'email'}
                      placeholder={'Email'}
                      className={'contact-input'}
                      value={email}
                      required
                      onChange={({target:{value}}) => setEmail(value)}
                    />

                    <textarea
                      name={'comment'}
                      placeholder={'Type here...'}
                      className={'contact-textarea'}
                      value={comment}
                      required
                      onChange={({target:{value}}) => setComment(value)}
                    />

                    <Button
                      width={'10vw'}
                      height={'60px'}
                    >
                      {
                        isLoading ? <LoadingOutlined /> : <SendOutlined />
                      }
                      &nbsp;SEND
                    </Button>
                  </form>
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