import Link from 'next/link';

/* Internal routes ("/services") use Next's client-side <Link> for instant
 * navigation; everything else (tel:, mailto:, external https) is a plain <a>. */
export default function SmartLink({ href = '#', children, ...rest }) {
  const internal = typeof href === 'string' && href.startsWith('/');
  if (internal) {
    return <Link href={href} {...rest}>{children}</Link>;
  }
  return <a href={href} {...rest}>{children}</a>;
}
