'use client';

import CarbonHeader from '@/components/CarbonHeader/CarbonHeader';
import CarbonFooter from '@/components/CarbonFooter/CarbonFooter';
import { Content, Theme } from '@carbon/react';


export function Providers({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div>
        <Theme theme="white">
          <CarbonHeader />
        </Theme>
      </div>
      <div style={{ flex: '1' }}>
        <Content>{children}</Content>
      </div>
      <div>
        <CarbonFooter />
      </div>
    </div>
  );
}