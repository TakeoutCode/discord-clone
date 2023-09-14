import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  const state = true;
  return (
    <div className='flex flex-col'>
      <p className='text-3xl font-bold text-indigo-500'>hello world </p>
      <Button className={cn('bg-indigo-500', state && 'bg-red-500')}>
        Click me
      </Button>
    </div>
  );
}
