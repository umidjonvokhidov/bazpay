import Image from 'next/image';

const loading = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <Image
        src="/assets/icons/Logo.svg"
        alt="Loading..."
        width={201}
        height={48}
        className="animate-pulse-scale"
      />
    </div>
  );
};

export default loading;


