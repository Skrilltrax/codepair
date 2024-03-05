import { DashboardIcon } from '@radix-ui/react-icons';
import { spaceMono } from '@/app/fonts';
import { Button } from '@/components/ui/button';

export default function IoPanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-9 w-full flex-row items-baseline justify-start bg-secondary">
        <DashboardIcon className="self-center" />
        <div className="mx-2 h-4 py-2 text-sm text-primary">Output</div>
      </div>
      <div className={`${spaceMono.className} flex-grow p-2`}>
        <span className="font-extrabold text-red-500">{`> `}</span>
        {'Run your code to see output here'}
      </div>
      <div className="flex h-9 w-full flex-row items-baseline justify-start bg-secondary">
        <DashboardIcon className="self-center" />
        <div className="mx-2 h-4 py-2 text-sm text-primary">Input</div>
      </div>
      <div className={`${spaceMono.className} flex-grow p-2`}>
        <textarea
          className="h-full w-full resize-none bg-transparent focus-visible:outline-none"
          placeholder="> Enter your inputs here"
        />
      </div>
      <div className="flex h-9 w-full flex-row items-center justify-end bg-secondary">
        <Button className="mx-1 h-7">Run</Button>
      </div>
    </div>
  );
}
