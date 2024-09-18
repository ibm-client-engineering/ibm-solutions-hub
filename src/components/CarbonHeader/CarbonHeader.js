import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
  } from '@carbon/react';
import { Search } from '@carbon/icons-react';
import Link from 'next/link';
  
  const CarbonHeader = () => (
    <HeaderContainer
      render={({}) => (
        <Header aria-label="Solutions Hub">
          <SkipToContent />
          <Link href="/" passHref legacyBehavior>
            <HeaderName prefix="IBM">
              Client Engineering Solutions Hub
            </HeaderName>
          </Link>
          <HeaderNavigation aria-label="Solutions Hub">
          <Link href="/projects" passHref legacyBehavior>
            <HeaderMenuItem>Projects</HeaderMenuItem>
          </Link>  
          <Link href="/mission" passHref legacyBehavior>
            <HeaderMenuItem>Mission</HeaderMenuItem>
          </Link>
          </HeaderNavigation>
        </Header>
      )}
    />
  );
  
  export default CarbonHeader;

/*
          <Link href="/methodology" passHref legacyBehavior>
            <HeaderMenuItem>Methodology</HeaderMenuItem>
          </Link>
          <Link href="/patterns" passHref legacyBehavior>
            <HeaderMenuItem>Patterns</HeaderMenuItem>
          </Link>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search" tooltipAlignment="end">
                <Search size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
*/