let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// function printList(list){
//     let temp_list = []
//     while (list) {
//         temp_list.unshift(list.value);
//         list = list.next;
//     }
//     temp_list.forEach(elem=> console.log(elem))
// }

function printList(list){
    if (list.next) {
        printList(list.next)
    }
    console.log(list.value)
}

printList(list)


