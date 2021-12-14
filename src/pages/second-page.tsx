import Link from 'next/link'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GetStaticPropsContext } from 'next'

const SecondPage = () => {
  const { t } = useTranslation('main.second-page')

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <Link href="/" passHref>
          <button type="button">{t('back-to-home')}</button>
        </Link>
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale || 'fr', [
      'main.second-page',
      'main.footer',
    ])),
  },
})

export default SecondPage
