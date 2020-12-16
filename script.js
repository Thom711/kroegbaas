const age = 18;
const isFemale = true;
const driverStatus = 'bob';

if (age >= 18 && isFemale) {
    console.log('Kom binnen!');

    if (driverStatus === 'bob') {
        console.log('Je bent de bob, je mag rijden.');
    } else {
        console.log('Je bent niet de bob, je mag niet rijden.');
    }
} else {
    console.log('Geen toegang, sorry.');
}

