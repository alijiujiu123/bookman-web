import type { Metadata } from 'next';

import { EntryPage } from '../../components/entry-page';
import { routePageContent } from '../../lib/site-content';

export const metadata: Metadata = {
  title: '书友列表入口 | Bookman',
  description: routePageContent.friends.description,
};

export default function FriendsPage() {
  return <EntryPage {...routePageContent.friends} />;
}
