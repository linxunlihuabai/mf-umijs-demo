/*
 * @Author: sunfangyuan
 * @Date: 2021-07-16 16:45:31
 * @LastEditors: sunfangyuan
 * @LastEditTime: 2021-07-19 20:16:17
 * @Description: 暂无描述
 */
import Button from '@/components/Button';
import React from 'react';
import styles from './index.less';

const Input = React.lazy(()=>import('host/Input'))

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Remote Page</h1>
      <React.Suspense fallback="loading">
        <Input></Input>
      </React.Suspense>
      <Button></Button>
    </div>
  );
}
