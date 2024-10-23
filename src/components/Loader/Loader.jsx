import { Hourglass } from 'react-loader-spinner';
import {LoaderCont} from './Loader.styled';

export function Loader({size="80"}) {
  return (
    <LoaderCont>
      <Hourglass
        visible={true}
        height={size}
        width={size}
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        //   colors={['#306cce', '#72a1ed']}
        colors={[ '#599caa', '#599caa']}
      />
    </LoaderCont>
  );
}
