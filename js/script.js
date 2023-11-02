
const text = ['طراح و برنامه نویس سایت','پشتیبانی و بهینه سازی سایت','سئو، لینک سازی داخلی و خارجی']
let t = document.querySelector('#text');
let i = 0;
let count = 0;
(function type () {
    console.log(i)
    if ( count == text[i].length ) {
        count = 0;
        i++;
    }
    if ( i == text.length ) {
        i = 0;
    }
    t.textContent = text[i].slice(0,++count)
    
    setTimeout( type, 150);
})()
