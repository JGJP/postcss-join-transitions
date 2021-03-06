# PostCSS Merge Transitions [![Build Status][ci-img]][ci]

[PostCSS] plugin that joins conflicting transition declarations.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/JGJP/postcss-join-transitions.svg
[ci]:      https://travis-ci.org/JGJP/postcss-join-transitions

Input:

```css
.foo {
  transition: opacity .3s ease;
  transition: transform .3s ease;
  -webkit-transition: opacity .3s ease;
  -webkit-transition: transform .3s ease;
}
```

Output:

```css
.foo {
  transition: opacity .3s ease, transform .3s ease;
  -webkit-transition: opacity .3s ease, transform .3s ease;
}
```

## Usage

```js
postcss([ require('postcss-join-transitions') ])
```

See [PostCSS] docs for examples for your environment.
