import { useQuery } from 'react-query';
import { Col, Row } from 'antd';
import { CardContent } from '../components/CardContent';

const City = () => {
  const { isLoading, error, data, isFetching } = useQuery('manyCities', () =>
    fetch('http://localhost:1337/cities').then((res) => res.json())
  );
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  return (
    <div>
      <h1>Cities</h1>
      <div className='site-card-wrapper'>
        <Row gutter={[24, 24]}>
          {console.log(data)}
          {data.map((i, key) => (
            <Col sm={24} lg={12} xl={8} key={key}>
              <CardContent props={i} />
            </Col>
          ))}
        </Row>
      </div>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  );
};

export default City;
