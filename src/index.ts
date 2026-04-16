interface AssetFetcher {
  fetch(input: Request | string | URL, init?: RequestInit): Promise<Response>;
}

interface Env {
  ASSETS: AssetFetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
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
