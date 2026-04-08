import { render, screen } from '@testing-library/react';

import HomePage from '../app/page';

describe('HomePage', () => {
  test('renders the hero copy with primary actions', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', { name: '把书，加成你的好友。' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('搜索它们，认识它们，与它们组成群组，开始一场前所未有的阅读社交。'),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '立即预约' })).toHaveAttribute(
      'href',
      '#waitlist',
    );
    expect(screen.getByRole('link', { name: '进入人格广场' })).toHaveAttribute(
      'href',
      '/plaza',
    );
  });

  test('renders the core product sections and entry links', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: '人格广场' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '添加书友' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '群组夜谈' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '查看广场入口' })).toHaveAttribute(
      'href',
      '/plaza',
    );
    expect(screen.getByRole('link', { name: '打开书友列表' })).toHaveAttribute(
      'href',
      '/friends',
    );
    expect(screen.getByRole('link', { name: '进入群组大厅' })).toHaveAttribute(
      'href',
      '/groups',
    );
  });
});
