
let incomeCalc = new IncomeCalculator();
export default incomeCalc

class IncomeCalculator {
  calculateInnIncome(inn, demand) {
    let rentIncome = 0;

    // calculate how those needs are filled
    if(demand.neededRooms >= inn.rooms) {
      let excessRooms = demand.neededRooms - inn.rooms;
      rentIncome += 10 * inn.rooms + excessRooms * 2;
    } else {
      rentIncome += 10 * demand.neededRooms;
    }
    console.log('room income', rentIncome)
    return rentIncome;
  }
}