'use client';

interface Props {
  className?: string;
}

const Completed: React.FC<Props> = ({ className }) => {
  return <div className={className}>
      <div className="h-dvh border-2 border-blue-500">
      <h1 className="text-center text-2xl font-bold">Completed</h1>
      <p className="text-center text-gray-600">Tasks that have been completed</p>
    </div>
    </div>;
};
export default Completed;