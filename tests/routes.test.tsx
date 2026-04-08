import { render, screen } from '@testing-library/react';

import FriendsPage from '../app/friends/page';
import GroupsPage from '../app/groups/page';
import PlazaPage from '../app/plaza/page';

describe('Product entry pages', () => {
  test('renders plaza page as the product discovery entry', () => {
    render(<PlazaPage />);

    expect(
      screen.getByRole('heading', { name: '人格广场入口' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '返回首页' })).toHaveAttribute(
      'href',
      '/',
    );
  });

  test('renders friends and groups placeholder pages', () => {
    render(
      <>
        <FriendsPage />
        <GroupsPage />
      </>,
    );

    expect(screen.getByRole('heading', { name: '书友列表入口' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '群组大厅入口' })).toBeInTheDocument();
  });
});
