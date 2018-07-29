# Next Link Active

A simple way to render your links in context of the current route in Next.js

# Installation

```shell
npm install next-link-active
```

or

```shell
yarn add next-link-active
```

# How it works

This library just exposes a replacement for `next/link` that takes a render prop as a child with an `active` property.

```javascript
import React from 'react';
import LinkActive from 'next-link-active';

export default () => (
  <LinkActive href="/some-url" passHref>
    {active => <a style={{ color: active ? 'tomato' : 'black' }}>Link/a>}
  </LinkActive>
);
```
