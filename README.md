# PostCSS Merge Transitions [![Build Status][ci-img]][ci]

[PostCSS] plugin that joins conflicting transition rules into a single rule.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/JGJP/postcss-join-transitions.svg
[ci]:      https://travis-ci.org/JGJP/postcss-join-transitions

```css
.foo {

}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-join-transitions') ])
```

See [PostCSS] docs for examples for your environment.
