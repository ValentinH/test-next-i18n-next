import type { GetStaticPropsContext, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import nextI18NextConfig from '../../next-i18next.config.js'

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'fr', [
        'main.common',
        'main.footer',
      ])),
    },
  }
}

const Home: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('main.common')
  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <Link href="/" locale={router.locale === 'en' ? 'fr' : 'en'} passHref>
            <button>{t('change-locale')}</button>
          </Link>
          <Link href="/second-page" passHref>
            <button type="button">{t('to-second-page')}</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
