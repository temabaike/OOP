class Car {
  brand;
  model;
  carYear;
  distance;
  countOfFuel;

  constructor(brand, model, carYear, distance, countOfFuel) {
    this.brand = brand;
    this.model = model;
    this.carYear = carYear;
    this.distance = distance;
    this.countOfFuel = countOfFuel;
  }

  getConsumptionFuel() {
    console.log(`Моя машина ${this.brand}, модель: ${this.model}, год выпуска: ${this.carYear}, пройденное расстояние: ${this.distance}, израсходовано топлива: ${this.countOfFuel}, расход машины: ${this.countOfFuel / this.distance * 100}`);
  }
}

const myCar = new Car('Mercedes', 'AMG', '2019', '5000', '1000');

console.log(myCar.getConsumptionFuel())