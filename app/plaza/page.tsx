import type { Metadata } from 'next';

import { EntryPage } from '../../components/entry-page';
import { routePageContent } from '../../lib/site-content';

export const metadata: Metadata = {
  title: '人格广场入口 | Bookman',
  description: routePageContent.plaza.description,
};

export default function PlazaPage() {
  return <EntryPage {...routePageContent.plaza} />;
}
