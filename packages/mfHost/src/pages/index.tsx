/*
 * @Author: sunfangyuan
 * @Date: 2021-07-16 16:53:39
 * @LastEditors: sunfangyuan
 * @LastEditTime: 2021-07-19 17:52:25
 * @Description: 暂无描述
 */
import styles from './index.less';
import React from 'react';
import Input from '@/components/Input';

const Button = React.lazy(()=>import('remote/Button'))

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Host Page</h1>
      <React.Suspense fallback="LOADING.....">
        <Input></Input>
        <Button></Button>
      </React.Suspense>
    </div>
  );
}
