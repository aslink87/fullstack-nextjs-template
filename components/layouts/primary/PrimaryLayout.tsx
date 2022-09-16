// import styles from './PrimaryLayout.module.scss'
import React from 'react';
import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>Next/Typescipt Template</title>
      </Head>
      <div
        {...divProps}
        className={`min-h-screen bg-blue-500 flex flex-col ${justify}`}
      >
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default PrimaryLayout;
