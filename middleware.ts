import { rewrite } from '@vercel/edge';

const DEFAULT_LOCALE = 'en-US';

export default function middleware(request: Request): Response {
  const url = new URL(request.url);
  const firstPathSegment = url.pathname.split('/')[1];

  switch (firstPathSegment) {
    case 'en-US':
    case 'fr-BE':
      break;
    default:
      url.pathname = `/${DEFAULT_LOCALE}${url.pathname}`;
      break;
  }

  return rewrite(url);
}
