export function loginLoader({request}) {
  const message = new URL(request.url).searchParams
  return message.get("message")
}
