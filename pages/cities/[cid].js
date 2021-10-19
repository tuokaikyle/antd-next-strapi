import { useRouter } from 'next/router';
import vert from '../../public/vert.jpeg';
import Image from 'next/image';
import { useQuery } from 'react-query';

const CardDetails = () => {
  const router = useRouter();
  const { cid } = router.query;
  const { isLoading, error, data } = useQuery('oneCity', () =>
    fetch('http://localhost:1337/cities/' + cid).then((res) => res.json())
  );
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <h1>{data.Name}</h1>
      <Image src={vert} alt='Picture' />
    </>
  );
};

export default CardDetails;
