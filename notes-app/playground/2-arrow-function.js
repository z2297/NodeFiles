// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

// const event = {
//     name: 'Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name)
//     }
// }

// //this keyword not accessable with arrow functions
// const event = {
//     name: 'Party',
//     printGuestList:  () => {
//         console.log('Guest list for ' + this.name)
//     }
// }


const event = {
    name: 'Party',
    guestList: ['bob', 'bill', 'mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name + '\n')
        })
    }
}

event.printGuestList()