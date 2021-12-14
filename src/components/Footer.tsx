import { useTranslation } from 'next-i18next'

export const Footer = () => {
  const { t } = useTranslation('main.footer')

  return (
    <footer>
      <p>{t('description')}</p>
    </footer>
  )
}
