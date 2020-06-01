import React from 'react';
//import ReactDOM from 'react-dom';
import './Clock.css';

import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
//import { Button } from 'react-bootstrap';


class Clock extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      break: 5,
      minutes: 25,
      seconds: 0,
      timerOn: false,
      timeLeft: 0,

    }
  }

   handleBreakInc = () => {
     this.setState( state => ({
       break: state.break + 1
     }));
   }
    handleSessionInc = () => {
     this.setState( state => ({
       session: state.session + 1
     }));
   }
     handleBreakDec = () => {
     this.setState( state => ({
       break: state.break - 1
     }));
   }
      handleSessionDec = () => {
     this.setState( state => ({
       session: state.session - 1
     }));
   }


   handleReset = () => {
    this.setState({ break: 5, session: 25});
   }
      
 
   //     startTimer = () => {
   //   if(this.state.timerOff){
   //     let time = this.state.session
   // }

  //  startTimer = () => {

  //   this.setState({
  //     timerOn: true,
  //     time: this.state.session,
  //     start: Date.now() - this.time
  //   });
     
  //    let deadline = new Date(this.state.session).getTime();
  //    let now = new Date().getTime();
  //    let time = deadline - now;

     // let days = Math.floor(time % (1000 * 60 * 60 * 24));
     // let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    //  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    //  let seconds = Math.floor((time % (1000 * 60)) / 1000);
   //}
  startTimer = () => {
    // this.setState({
      
    // })

      this.timer = setInterval(() =>
       this.setState({
         timerOn: true,
         timeLeft: this.state.minutes -- }), 1000)
         console.log("Start");
  }

    stopTimer = () => {
      clearInterval(this.timer);
      this.handleReset();
      //this.setState({ timerOff: true });
    }

  render() {
    // time left must always be in mm:ss
    const { minutes, seconds } = this.state;
    // start_stop element needs to be clickable
    return (
        <div className="container clock-container">
        
        <Container>
        <div id="session-display">
        <Row>
          <Col>
            <h5>Pomodoro Clock</h5>
            <div id="time-left"> timer: {minutes }: { seconds < 10 ? `0${ seconds }`: seconds }</div>
            </Col>
            </Row>


          <Row>
          <Col>
            <div id="start_stop" onClick={this.startTimer}> Start</div>
          </Col>
          
          <Col>
            <div id="stop" onClick={this.stopTimer}>Stop</div>
          </Col>
          
          <Col> 
          <div id="reset" onClick={this.handleReset}>Reset</div>
        </Col>

          </Row>
        </div>
        </Container>


       <Container>
        <Row >
            <Col>
            <div id="breaks">
              <div id="break-label"> Break </div>
              <div id="break-increment" onClick={this.handleBreakInc}>
                <img className="plus" alt="Plus sign" src="https://img.icons8.com/android/24/000000/plus.png" /></div>

              <div id="break-length"> {this.state.break} </div>

              <div id="break-decrement" onClick={this.handleBreakDec}>
                <img className="minus" alt="Minus sign" src="https://img.icons8.com/material-two-tone/24/000000/minus-math.png" /></div>
           </div>
           </Col>

          <Col>
            <div id="sessions">
                
              <div id="session-label"> Session </div>
              

              <div id="session-increment" onClick={this.handleSessionInc}> 
                <img className="plus" alt="Plus sign" src="https://img.icons8.com/android/24/000000/plus.png" /></div>
              <div id="session-length"> {this.state.session} </div>

              <div id="session-decrement" onClick={this.handleSessionDec}>
                 <img className="minus" alt="Minus sign" src="https://img.icons8.com/material-two-tone/24/000000/minus-math.png" /></div>
              
           </div>
          </Col>

         </Row>
        </Container>

      </div>
    )
  }
}


export default Clock;
//ReactDOM.render(<Clock />, document.getElementById('root'));
// up arrow
//<img src="https://img.icons8.com/android/24/000000/up.png"/>
//down arrow
//<img src="https://img.icons8.com/android/24/000000/down.png"/>