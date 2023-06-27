import { faker } from '@faker-js/faker'

export const generateDog = (id) => {
  const dog = {
    id,
    name: faker.person.firstName(),
    color: faker.color.human(),
    tail_length: faker.number.int({ min: 1, max: 100 }),
    weight: faker.number.int({ min: 1, max: 100 }),
  }
  return dog
}

const dogNames = new Set()

export const generateDogs = (amount) => {
  const dogs = []
  for (let i = 0; i < amount; i++) {
    const dog = generateDog(i)
    if (dogNames.has(dog.name)) {
      i--
      continue
    }
    dogs.push(dog)
    dogNames.add(dog.name)
  }
  return dogs
}
