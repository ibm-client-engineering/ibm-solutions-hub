'use client';

import CarbonHeader from '@/components/CarbonHeader/CarbonHeader';
import CarbonFooter from '@/components/CarbonFooter/CarbonFooter';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
        <Theme theme="white">
            <CarbonHeader />
        </Theme>
        <Content>{children}</Content>
        <CarbonFooter />
    </div>
  );
}