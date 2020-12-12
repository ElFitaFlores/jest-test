const cities = ['Ciudad de Mexico', 'Bogotá', 'Lima', 'Buenos Aires', 'Guadalajara']

const randomString = () => {
    return cities[Math.floor(Math.random() * cities.length)]
}

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}

module.exports = randomString