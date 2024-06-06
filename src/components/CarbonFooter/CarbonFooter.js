import C4DFooterContainer from '@carbon/ibmdotcom-web-components/es/components-react/footer/footer-container';

// const CarbonFooter = () => (
//   <div style={{ marginTop: 'auto', width: '100%' }}>
//     <C4DFooterContainer size="micro" />
//   </div>
// );

const CarbonFooter = () => (
  <div style={{ marginTop: 'auto', width: '100%' }}>
    <style>{`
      .c4d--locale-btn {
        display: none;
      }
    `}</style>
    <C4DFooterContainer size="micro" />
  </div>
);

export default CarbonFooter;

// export default CarbonFooter;