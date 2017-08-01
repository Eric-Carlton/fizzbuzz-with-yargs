(() => {
    const start = new Date().getTime();

    const yargs = require('yargs');

    yargs
        .option('min', {
            alias: 'n',
            default: 1,
            description: 'Value to start at',
            type: 'number'
        })
        .option('max', {
            alias: 'm',
            default: 100,
            description: 'Value to count to',
            type: 'number'
        })
        .option('fizz', {
            alias: 'f',
            default: 3,
            description: 'Multiples of this value print "Fizz"',
            type: 'number'
        })
        .option('buzz', {
            alias: 'b',
            default: 5,
            description: 'Multiples of this value print "Buzz"',
            type: 'number'
        })
        .help();

    const args = yargs.argv;

    console.info(`Counting from ${args.min} to ${args.max}. Printing Fizz if ` +
        `value is a multiple of ${args.fizz} and Buzz if value is a ` +
        `multiple of ${args.buzz}.`);

    for (let i = args.min; i <= args.max; i++) {
        let out = '';

        if (i % args.fizz === 0) {
            out += 'Fizz';
        }
        if (i % args.buzz === 0) {
            out += 'Buzz';
        }
        if (out === '') {
            out += i;
        }

        console.log(out);
    }

    console.log(`Execution time: ${new Date().getTime() - start}ms`);
})();