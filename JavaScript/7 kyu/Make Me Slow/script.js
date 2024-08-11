/*
*Make me slow! Calling makeMeSlow() should take at least 7 seconds.
*/

const makeMeSlow = () => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < 7500);
}