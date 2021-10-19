import { Modal, Card } from 'antd';
import { useState } from 'react';
import Image from 'next/image';
import hori from '../public/test.jpeg';
import vert from '../public/vert.jpeg';
import Link from 'next/link';

export const CardContent = ({ props }) => {
  const { id, Name, Rating, Description } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Card title={Name} hoverable>
      <Link href={`/cities/${encodeURIComponent(id)}`}>
        <a>
          <Image src={Rating > 7 ? hori : vert} alt='Picture' />
        </a>
      </Link>
      {Description.length > 300 ? (
        <>
          <p>
            {Description.substring(0, 300)}...
            <span onClick={showModal}>
              <a>[Read More]</a>
            </span>
          </p>
          <Modal
            title={Name}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            maskClosable={true}
          >
            <p>Rating: {Rating}</p>
            <p>{Description}</p>
          </Modal>
        </>
      ) : (
        Description
      )}
    </Card>
  );
};
