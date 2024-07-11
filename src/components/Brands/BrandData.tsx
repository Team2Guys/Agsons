import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Modal } from 'antd';
import Link from 'next/link';

interface BrandDataProps {
  image: any;
  title: string;
  description: string;
  activeTab: string;
  modalContant?: any // modalContent can be undefined or a React node
  Download: string;
  website: string;
}

const BrandData: React.FC<BrandDataProps> = ({ image, title, description, activeTab, modalContant, Download, website }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-10">
      <div className="flex flex-wrap lg:flex-nowrap lg:items-center bg-primary py-2 px-2 md:py-10 md:px-10">
        <div className="w-full lg:w-1/2">
          <Image
            className="h-full w-full object-contain md:h-full lg:w-full lg:h-full"
            width={500}
            height={500}
            src={image}
            alt={title}
            priority
          />
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-10 lg:w-1/2">
          <h3 className="text-xl font-bold text-start">{title}</h3>
          <p className="mt-3 text-sm md:text-base sm:mt-4">{description}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            <button
              onClick={() => router.push(`/product?tab=${activeTab}`)}
              className="bg-black rounded-full text-[10px] md:text-base px-2 md:px-4 py-2 text-white"
            >
              View Products
            </button>

            {modalContant && (
              <button
                onClick={showModal}
                className="bg-black rounded-full text-[10px] md:text-base px-2 md:px-4 py-2 text-white"
              >
                Technical Details
              </button>
            )}

            <Modal title="" footer="" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={2000}>
              {modalContant}
            </Modal>

            <Link
              target="_blank"
              href={Download}
              download={Download}
              className="bg-black rounded-full text-[10px] md:text-base px-2 md:px-4 py-2 text-white"
            >
              Download Catalogue
            </Link>
            <Link
              href={website}
              target="_blank"
              className="bg-black rounded-full text-[10px] md:text-base px-2 md:px-4 py-2 text-white"
            >
              Visit Official Site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandData;
