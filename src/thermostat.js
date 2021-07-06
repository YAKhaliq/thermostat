class Thermostat {
  constructor(){
    this.temperature = 20
    this.powerSM = true
    this.maxTemp = 25
  };

  psm(){
    return this.powerSM
  };

  turnOffPSM(){
    this.powerSM = false
    this.maxTemp = 32
  }

  temp(){
    return this.temperature
  };

  up(){
    if (this.temperature < this.maxTemp){
      (this.temperature) += 1 ;
    };
  };

  down(){
    if (this.temperature > 10){
      (this.temperature) -= 1
    };
  };
};