// Board setup — you may need to change the port
var b = p5.board('/dev/cu.usbmodem1421', 'arduino');

// PWM Slider

var slider, pin;
var ran;

function setup() {
  var ran = random(10, 100)
  slider = createSlider(0, 255, ran);
  slider.position = (10, 10);
  pin = b.pin(9, 'PWM', 'OUTPUT');

}

function draw() {
  var val = slider.value();
  pin.write(val);
}

/*
Procedure:

1. in the arduino IDE, Upload a StandardFirmata to the board

2. open Terminal, and run the following
  npm install -g p5bots-server
  this will update or install the latest p5botsserver.

3. make sure you have written your index file with the correct libs...
and included the
  <script src="https://cdn.socket.io/socket.io-1.3.5.js"></script>
  in order to comunicate with the node.js p5botsserver

4. create your p5 sketch.js and write the code of your choice

5. build or setup the actual breadboard

6. connect the arduino to the computer via USB, and upload the StandardFirmata to the Board

7. open up the terminal this time type
    bots-go -d [] <---- input the path to your folder containing your sketch.

8. hit enter and the terminal should read "server starting" and asking to connect with the node.js p5botsserver

9. run the code via atom-live-server and there you go

I have for this example chosen to use the PWM Slider example from p5.bots.
*/
