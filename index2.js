// let box = document.getElementById('aside')
// console.log(box);

// function toggle(){
//     if(box.style.display == 'none'){
//         box.style.display = 'block'
       
//     }
//     else{
//         box.style.display = 'none'
//     }
// }


// let bar = document.getElementById('bar')
// bar.addEventListener('mouseover',toggle)



setInterval(() => {
    let sonam = document.getElementById('FRONT');

    if (sonam.style.display === 'none') {
        sonam.style.display = 'block';
    } else {
        sonam.style.display = 'none';
    }
}, 2000);

setInterval(() => {
    let sonam = document.getElementById('sonam');
    sonam.classList.toggle('show');
}, 2000);