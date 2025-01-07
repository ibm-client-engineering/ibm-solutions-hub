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
import Link from 'next/link';
import { useState, useEffect } from 'react';


const CarbonHeader = () => {
  const [page, setPage] = useState(typeof window !== 'undefined' ? window.location.pathname: "/")
  return (
  <HeaderContainer
    render={({}) => (
      <Header aria-label="Solutions Hub">
        <SkipToContent />
        <Link href="/" passHref legacyBehavior>
          <HeaderName prefix="IBM" onClick={() => setPage("/ibm-solutions-hub")}>
            Solutions Hub
          </HeaderName>
        </Link>
        <HeaderNavigation aria-label="Solutions Hub">
        <Link href="/" passHref legacyBehavior>
          <HeaderMenuItem isActive={page === "/ibm-solutions-hub"} onClick={() => setPage("/ibm-solutions-hub")}>Home</HeaderMenuItem>
        </Link>
        <Link href="/projects" passHref legacyBehavior>
          <HeaderMenuItem isActive={page === "/ibm-solutions-hub/projects"} onClick={() => setPage("/ibm-solutions-hub/projects")}>Projects</HeaderMenuItem>
        </Link>  
        <Link href="/mission" passHref legacyBehavior>
          <HeaderMenuItem isActive={page === "/ibm-solutions-hub/mission"} onClick={() => setPage("/ibm-solutions-hub/mission")}>Mission</HeaderMenuItem>
        </Link>
        <Link href="/contact" passHref legacyBehavior>
          <HeaderMenuItem isActive={page === "/ibm-solutions-hub/contact"} onClick={() => setPage("/ibm-solutions-hub/contact")}>Contact Us</HeaderMenuItem>
        </Link>
        </HeaderNavigation>
      </Header>
    )}
  />
  )
};

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