var postcss = require('postcss');

module.exports = postcss.plugin('postcss-merge-transitions', function () {

    // Work with options here

    return function (root) {

        // iterate over rules

        iterateRules( root.nodes );

    };

    function iterateRules( nodes ) {

        for (var i = 0; i < nodes.length; i++) {

            var rule = nodes[i];

            if ( rule.type === 'rule' ) {

                mergeTransitions( rule );

            } else if (rule.type === 'atrule' && rule.name === 'media') {

                iterateRules( rule.nodes );

            }

        }

    }

    function mergeTransitions( rule ) {

        // iterate over declarations in rule

        var transitions = [];

        var ii = 0;
        var ll = rule.nodes.length;

        while ( ii < ll ) {

            if ( rule.nodes[ii].prop === 'transition' ) {

                // if transition declaration is found, store in array and remove from rule

                transitions.push(rule.nodes[ii].value);
                rule.nodes[ii].remove();

                ll--;

            } else {

                ii++;

            }

        }

        // when reached end of rule, join transitions and append as single rule, clear array

        if ( transitions.length > 0 ) {

            rule.append({
                prop: 'transition',
                value: transitions.join(', ')
            });

            transitions = [];

        }

    }

});

