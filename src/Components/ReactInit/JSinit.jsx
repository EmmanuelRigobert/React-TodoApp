
const person = {
  name: 'John',
  address: {
    city: 'New York',
    country: 'USA'
  },
  profiles: ['Facebook', 'Twitter', 'LinkedIn'],
  printProfile: () => {
    person.profiles.map((profile) => console.log(profile)
  )
  }
}

export default function JSinit() {
  return (
    <div>
      <div>{person.name}</div>
      <div>{person.address.city}</div>
      <div>{person.address.country}</div>
      <div>{person.printProfile()}</div>
    </div>
  );
}