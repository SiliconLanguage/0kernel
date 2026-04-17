interface AssetFetcher {
  fetch(input: Request | string | URL, init?: RequestInit): Promise<Response>;
}

interface Env {
  ASSETS?: AssetFetcher;
}

const FALLBACK_FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="0kernel icon"><defs><radialGradient id="bg" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#111111" /><stop offset="100%" stop-color="#0A0A0A" /></radialGradient></defs><rect width="64" height="64" rx="10" fill="url(#bg)" /><circle cx="32" cy="32" r="16" fill="none" stroke="#00F2FF" stroke-width="2" /><circle cx="32" cy="32" r="3.6" fill="#00F2FF" /></svg>`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Always resolve favicon even if ASSETS binding is temporarily unavailable.
    if (url.pathname === '/favicon.svg' && !env.ASSETS) {
      return new Response(FALLBACK_FAVICON_SVG, {
        headers: {
          'content-type': 'image/svg+xml; charset=utf-8',
          'cache-control': 'public, max-age=3600',
        },
      });
    }

    if (!env.ASSETS) {
      return new Response('ASSETS binding is not configured for this Worker deployment.', {
        status: 500,
      });
    }

    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    const isRouteRequest = request.method === 'GET' && !url.pathname.includes('.');
    if (isRouteRequest) {
      return env.ASSETS.fetch(new Request(new URL('/index.html', url), request));
    }

    return assetResponse;
  },
};
