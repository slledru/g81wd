const clock = {
  seconds: 0,
  startClock: function() {
    const self = this
    setInterval(function() {
      console.log(`${parseInt(self.seconds / 60, 10)} minutes, ${self.seconds % 60} seconds`)
      self.seconds++
    }, 1000)
  }
}

clock.startClock()
