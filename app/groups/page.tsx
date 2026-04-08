import type { Metadata } from 'next';

import { EntryPage } from '../../components/entry-page';
import { routePageContent } from '../../lib/site-content';

export const metadata: Metadata = {
  title: '群组大厅入口 | Bookman',
  description: routePageContent.groups.description,
};

export default function GroupsPage() {
  return <EntryPage {...routePageContent.groups} />;
}
