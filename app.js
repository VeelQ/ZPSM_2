const _ = require('lodash');



let arr = [1, 2, 3, 4, 5]

console.log(
_.mean( arr )
)
console.log(
    "Max:", Math.max(...arr),"\n","Min:", Math.min(...arr)
)

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5, 4, 3, 5, 2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
}


let fun = x => {

    let t = 0 ; let y = 0 ; let avg = 0

    for (let i = 0; i < x.allGrades.length; i++) {
        x.allGrades[i].grades.forEach((grade) => {
           t += grade * x.allGrades[i].weight
        })
        y += (x.allGrades[i].grades.length * x.allGrades[i].weight)
    }

    avg = t/y

    return "imie: " + x.name + "\nnazwisko: " + x.surname + "\naverage: " + _.round(avg,2) + "\n"
}

console.log(fun(user))