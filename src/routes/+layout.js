export const prerender = true;
export const trailingSlash = 'always';

export function load({ url }) {
    return {
        url: url.pathname,
    }
}