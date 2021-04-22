import React, { useContext,useState } from 'react';
import {Button,Navbar,NavbarBrand,Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap';
import { CardContext } from '../context/CardContext';

const NavBar = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const {handler2, handler4}= useContext(CardContext)
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand style={{color:"white"}} href="/">FlipFlop-Game</NavbarBrand>
        <div className="ml-auto">
        <Button color="secondary" onClick={handler2}>2*2</Button>{' '}
      <Button color="success" onClick={handler4}>4*4</Button>{' '}
      <Button color="info" onClick={toggle}>How to Play??</Button>
      <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Rules</ModalHeader>
        <ModalBody>
          <p>* Choose the size of matrix from the navigation bar</p>
          <p>* Initially some numbers would be shown to you on screen. See them carefully!!!</p>
          <p>* After the numbers are covererd by a image, start matching the numbers in pair.</p>
          <p>* Dont forget to keep an eye on the number of moves remaining.</p>
          <p>* So Lets Play</p>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={toggle}>Ready to Go</Button>
        </ModalFooter>
      </Modal>
    </div>

        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
