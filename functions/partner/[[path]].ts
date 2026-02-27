export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url)
  const targetUrl = `https://hub.citedagency.com${url.pathname}${url.search}`

  const response = await fetch(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.method !== 'GET' ? context.request.body : undefined,
  })

  const newResponse = new Response(response.body, {
    status: response.status,
    headers: response.headers,
  })

  newResponse.headers.delete('x-frame-options')

  return newResponse
}
