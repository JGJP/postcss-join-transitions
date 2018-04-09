var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

var input =
`.el {
    display: block;
    transition: opacity .3s ease;
    transition: transform .5s ease;
    opacity: .7;
}
@media (max-width: 34em) {
    .other-el{
        width: 100%;
        transition: color .3s ease;
        transition: background .5s ease;
    }
}`;
var output =
`.el {
    display: block;
    opacity: .7;
    transition: opacity .3s ease, transform .5s ease;
}
@media (max-width: 34em) {
    .other-el{
        width: 100%;
        transition: color .3s ease, background .5s ease;
    }
}`;

it('merges transitions', () => {
    return run(input, output, { });
});
