import { NextResponse, type NextRequest } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from '@/app/_i18n/settings'

acceptLanguage.languages(languages)

const cookieName = 'i18next'

export const middleware = (req: NextRequest) => {
  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()
  let lng
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  if (
    !languages.some((loc: string) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  if (req.headers.has('referer')) {
    const refererUrl: URL = new URL(req.headers.get('referer') || '')
    const lngInReferer: string | undefined = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}
