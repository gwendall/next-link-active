import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

const LinkActive = withRouter(({ router, children, ...props }) => (
  <Link {...props}>{children((props.as || props.href) === router.pathname)}</Link>
));

export default LinkActive;
