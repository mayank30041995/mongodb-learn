const {
  calculateTip,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
} = require('../src/math')

test('Should calculate total with tip', () => {
  const total = calculateTip(10, 0.3)
  expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
  const total = calculateTip(10)
  expect(total).toBe(12.5)
})

test('Should convert 32 F to 0 C', () => {
  const temp = fahrenheitToCelsius(32)
  expect(temp).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
  const temp = celsiusToFahrenheit(0)
  expect(temp).toBe(32)
})

const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
  },
}
const desiredHouse = {
  bath: true,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    wallColor: expect.stringMatching(/white|yellow/),
  },
}

test('the house has my desired features', () => {
  expect(houseForSale).toMatchObject(desiredHouse)
})

test('test some functions', () => {
  class A {}
  //   const drink = jest.fn(() => true)

  //   drink()
  //   drink()

  //   expect(drink).toHaveReturnedTimes(2)
  //   expect([1, 2, 3]).toHaveLength(3)
  expect(30).toBeGreaterThan(10)

  expect(new A()).toBeInstanceOf(A)
  expect(() => {}).toBeInstanceOf(Function)
  // expect(new A()).toBeInstanceOf(Function)
})

//
// Why test?
//
// - Saves time
// - Creates reliable software
// - Gives flexibility to developers
//   - Refactoring
//   - Collaborating
//   - Profiling
// - Peace of mind
