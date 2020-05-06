setTimeout(() => {
    console.log('two seconds are up')
}, 2000)

const names = ['Zach', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
    return name.length <= 4
}) 

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            long: 0
        }
        callback(data)
    }, 2000)
}

geocode('philidelphia', (info) => {
    console.log(info)
})
