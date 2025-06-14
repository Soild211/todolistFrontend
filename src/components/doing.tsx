'use client';

interface Props {
  className?: string;
}

export const Doing: React.FC<Props> = ({ className }) => {
  return <div className={className}>
      <div className="h-dvh border-2 border-blue-500">
      <h1 className="text-center text-2xl font-bold">Doing</h1>
      <p className="text-center text-gray-600">Tasks currently in progress</p>
    </div>
    </div>;
};
export default Doing;