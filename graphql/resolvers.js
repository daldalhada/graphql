const daldal = {
    name: "daldalhada",
    age: 27,
    gender: "male",
}

const resolvers = {
    Query: {
        person: () => daldal
    }
};

export default resolvers