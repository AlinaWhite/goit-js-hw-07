const linkList = document.querySelectorAll('.item');

console.log(`Numbers of categories: ${linkList.length}`);

linkList.forEach( item  => {
    const liTitle = item.querySelector('h2').textContent;

    const listElemenys = item.querySelectorAll('ul li');

    console.log( `Category: ${liTitle}`);
    console.log(`Elements: ${listElemenys.length}`);
});