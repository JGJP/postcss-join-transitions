var postcss = require('postcss');

module.exports = postcss.plugin('postcss-join-transitions', function () {

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
        var webkitTransitions = [];
        var oTransitions = [];

        var ii = 0;
        var ll = rule.nodes.length;

        while ( ii < ll ) {

            if ( rule.nodes[ii].prop === 'transition' ) {

                // if transition declaration is found, store in array and remove from rule

                transitions.push(rule.nodes[ii].value);
                rule.nodes[ii].remove();

                ll--;

            } else
            if ( rule.nodes[ii].prop === '-webkit-transition' ) {

                webkitTransitions.push(rule.nodes[ii].value);
                rule.nodes[ii].remove();

                ll--;

            } else
            if ( rule.nodes[ii].prop === '-o-transition' ) {

                oTransitions.push(rule.nodes[ii].value);
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

        if ( webkitTransitions.length > 0 ) {

            rule.append({
                prop: '-webkit-transition',
                value: webkitTransitions.join(', ')
            });

            webkitTransitions = [];

        }

        if ( oTransitions.length > 0 ) {

            rule.append({
                prop: '-o-transition',
                value: oTransitions.join(', ')
            });

            oTransitions = [];

        }

    }

});

