let count = 0;

function f()
{
    const but_handler = document.body.querySelector('#btn');
    if (but_handler)
    {
        but_handler.addEventListener('click', () => {
            const board = document.body.querySelector('#board');
            const elem = document.createElement('div');
            const text = document.createTextNode(`This is Text Node! : ${count}`);
            count++;
            elem.appendChild(text);
            board.appendChild(elem);
        });
    }
}
f();