let btn = document.querySelector('button');
let inp = document.querySelectorAll('input');
let form = document.querySelector('form')

btn.addEventListener("click", (event) => {
    inp.forEach(input => {
        input.style.display = 'none';
    });

    btn.style.display = 'none';

    event.preventDefault()

    let alert = document.createElement('div')
    alert.style.width = '250px';
    alert.style.height = '100px';
    alert.style.borderRadius = '15px';
    alert.style.backgroundColor = '#323946';
    alert.style.color = 'white';
    alert.textContent = 'The Massage Was Sent'
    alert.style.display = 'flex'
    alert.style.alignItems = 'center'
    alert.style.justifyContent = 'center'

    form.appendChild(alert)

    setTimeout(() => {
        alert.style.display = 'none';

      
        setTimeout(() => {
            
            btn.style.display = 'inline-block'; 
            inp.forEach(input => {
                input.style.display = 'inline-block';
            });
            btn.addEventListener("click", handleClick);
        }, 5000);
    }, 3000); 
});
