describe('thermostat', function(){

  let thermostat

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('thermostat should start at 20 degrees', () => {
    it('starts at 20', () => {
      expect(thermostat.temp()).toEqual(20);
    });
  });

  describe('can increase temp with up function', () => {
    it('can increase temp by 1 degree', () => {
      expect(thermostat.temp()).toEqual(20);
      thermostat.up();
      expect(thermostat.temp()).toEqual(21);
    });
  });

  describe('can decrease temp with down function', () => {
    it('can decrease temp by 1 degree', () => {
      expect(thermostat.temp()).toEqual(20);
      thermostat.down();
      expect(thermostat.temp()).toEqual(19);
    });
  });

  describe('temp can not be below 10 degrees', () => {
    it('temp does not fall below 10 degrees', () => {
      expect(thermostat.temp()).toEqual(20);
      for (let i = 1; i < 11; i++) thermostat.down();
      expect(thermostat.temp()).toEqual(10);
    });
  });

  describe('power saving mode on by default, can be turned off', () => {
    it('psm on by default', () => {
      expect(thermostat.psm()).toEqual(true);
    });
    it('psm can be turned off', () => {
      expect(thermostat.psm()).toEqual(true);
      thermostat.turnOffPSM();
      expect(thermostat.psm()).toEqual(false);
    });
  });

  describe('if PSM is on, max temp is 25 degrees', () => {
    it('can not exceed 25 degrees if PSM is on', () => {
      expect(thermostat.temp()).toEqual(20);
      for (let i = 1; i < 20; i++) thermostat.up();
      expect(thermostat.temp()).toEqual(25);
    });
  });

  describe('if PSM is off, max temp is 32 degrees', () => {
    it('can be more than 25 but can not exceed 32 degrees', () => {
      expect(thermostat.temp()).toEqual(20);
      thermostat.turnOffPSM();
      for (let i = 1; i < 20; i++) thermostat.up();
      expect(thermostat.temp()).toEqual(32);

    });
  });

  describe('reset function', () => {
    it('can reset the temperature to 20 degrees', () => {
      for (let i = 1; i < 20; i++) thermostat.up();
      thermostat.reset();
      expect(thermostat.temp()).toEqual(20);
    });
  });
  
  describe('currentEnergyUsage', () => {
    it('returns `low-usage` when temperature is below 18 degrees', () => {
      for (let i = 1; i < 4; i++) thermostat.down();
      expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
    });

    it('returns `medium-usage` when temperature is between 18 and 25 degrees', () => {
      expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
    });

    it('returns `high-usage` when temperature is above 25 degrees', () => {
      thermostat.turnOffPSM();
      for (let i = 1; i < 7; i++) thermostat.up();
      expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
    });
  });

});