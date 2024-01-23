`use client`;
import { Grid, Column } from '@carbon/react';

export default function LandingPage() {
    return (
        <Grid className="landing-page" fullWidth>
          <Column lg={16} md={8} sm={4} className="landing-page__banner">
            <Grid>
                <Column md={4} lg={4} sm={4}>
                    <h1 classname="landing-page__heading">IBM Client Engineering</h1>
                    <br/>
                    <h2>Working in the Open</h2>
                </Column>
            </Grid>
          </Column>
          <Column lg={16} md={8} sm={4} className="landing-page__r2">
            <Grid>
                <Column md={4} lg={4} sm={4}>
                    <h3>Recent Projects</h3>
                </Column>
            </Grid>
          </Column>
          <Column lg={16} md={8} sm={4} className="landing-page__r3">
            <Grid>
              <Column md={4} lg={4} sm={4}>
                <h3>Explore IBM Products</h3>
              </Column>
            </Grid>
          </Column>
        </Grid>
    );
}