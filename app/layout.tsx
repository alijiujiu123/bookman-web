import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Bookman | 把书，加成你的好友',
  description:
    'Bookman 把每一本书都变成可搜索、可添加、可群聊的人格，让阅读第一次从单向翻阅变成双向关系。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
