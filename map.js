let obj = [{
        id: 1,
        name: "acv"
    },
    {
        id: 2,
        name: "avd"
    },
    {
        id: 3,
        name: "ads"
    },
    {
        id: 4,
        name: "ads"
    },
    {
        id: 5,
        name: "ads"
    },
]

const selected = (id, id1) => {
    obj = obj.map((item) => {
        if (id == item.id || id1 == item.id) {
            return {
                ...item,
                isselected: true
            }
        } else {
            return {
                ...item,
                isselected : false
            }
        }
    })
}

selected(4)

console.log(obj);


let find = obj.filter((obj) => obj.isselected == true);
console.log(find);

let fal = obj.filter((obj) => obj.isselected != true);
console.log(fal);