class Station {
  constructor(name, location, bikes = []) {
    this.name = name;
    this.location = location;
    this.bikes = bikes;
  }

  newestBike() {
    return this.bikes.sort((a,b) => b.modelYear - a.modelYear)[0]
  };

  empty() {
    return this.bikes.length < 1 ? true : false
  };

  take(bike) {
    return this.bikes.push(bike)
  };

  takeMultiple(bike) {
   return (this.bikes = this.bikes.concat(bike))
  }

  release() {
    return this.bikes.length < 1 ? undefined : this.newestBike() && this.bikes.shift()
  }

}

module.exports = Station;
