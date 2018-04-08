# PostCSS Merge Transitions [![Build Status][ci-img]][ci]

[PostCSS] plugin that merges multiple transition rules on a selector into a single transition rule.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/JGJP/postcss-merge-transitions.svg
[ci]:      https://travis-ci.org/JGJP/postcss-merge-transitions

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-merge-transitions') ])
```

See [PostCSS] docs for examples for your environment.
