import { GlossaryPage } from './GlossaryPage'
import { GLOSSARY_ENTRIES } from '../../../_data/glossary'

export const metadata = {
  title: 'Glossary | RFCI',
  description:
    'Definitions for resilient flooring terminology, certifications, product types, sustainability language, and technical concepts used throughout RFCI resources.',
}

export default function GlossaryRoute() {
  return <GlossaryPage entries={GLOSSARY_ENTRIES} />
}
