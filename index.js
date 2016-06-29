function StopWatch(callback) {
  this._time = 0
  this._interval = null
  this._delay= 1000
  this._callback = callback

  this.start = function () {
    if (this._interval){return}
    this._interval = setInterval(this.addTime.bind(this), this._delay)
  }

  this.stop = function (){
    clearInterval(this._interval)
    this._interval = null
  }

  this.addTime = function() {
    this._time = this._time + this._delay
    this._callback(this._time)
  }
}

function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

// add code here
$(document).ready(function() {
  console.log("Yay! Melissa!");
  var container = $('#stopWatch')
  var display = container.children('.display')
  var buttons = container.children('button.stopWatch')
  var stopWatch = new StopWatch(function(newTime) {
	  h = Math.floor( newTime / (60 * 60 * 1000) );
  	newTime = newTime % (60 * 60 * 1000);
  	m = Math.floor( newTime / (60 * 1000) );
  	newTime = newTime % (60 * 1000);
  	s = Math.floor( newTime / 1000 );

  	times = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2);
    display.text(times)
  })


  buttons.on('click', function(event) {
    event.preventDefault()
    //interations built in.
    //it is good practice preventing default

    //wich botton did I click
    //and what should I do in response
    console.log("you click me!");

    var button = $(this)
    if (button.hasClass('start')) {
      //start the watch
      stopWatch.start()
      console.log("start watch");
    } else {
      //stop the watch
      console.log("stop watch");
      stopWatch.stop()
    }
    // console.log(this); //the object you are interating with, in thiscase the button
    // console.log(event); //Event Object
  })
})
