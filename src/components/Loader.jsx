import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <ColorRing
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{
          display: 'flex',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
        colors={['#CBDED3', '#BFD6EA', '#E0A39A', '#FFDC86', '#9FBAAE']}
      />
    </div>
  );
};
