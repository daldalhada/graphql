export const people = [
    {
        id: "0",
        name: "dal",
        age: 27,
        gender: "male",
    },
    {
        id: "1",
        name: "daldal",
        age: 27,
        gender: "male",
    },
    {
        id: "2",
        name: "daldaldal",
        age: 27,
        gender: "male",
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
};
