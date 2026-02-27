export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url)
  const targetUrl = `https://hub.citedagency.com${url.pathname}${url.search}`

  const response = await fetch(targetUrl, {
    method: 'GET',
    headers: context.request.headers,
  })

  const newResponse = new Response(response.body, {
    status: response.status,
    headers: response.headers,
  })

  newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable')

  return newResponse
}
