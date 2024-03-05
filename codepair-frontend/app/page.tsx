'use client';

import { NavigationMenu } from '@/components/ui/navigation-menu';
import StartMenu from '@/components/code-panel/start-menu';
import EndMenu from '@/components/io-panel/end-menu';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import CodePanel from '@/components/code-panel/code-panel';
import IoPanel from '@/components/io-panel/io-panel';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavigationMenu className="h-14 max-w-full flex-none justify-between border-b-2 border-primary-foreground p-4">
        <StartMenu />
        <EndMenu />
      </NavigationMenu>

      <main className="flex grow">
        <div className="min-h-full min-w-full p-4">
          <ResizablePanelGroup
            direction="horizontal"
            className="rounded-lg border-2"
          >
            <ResizablePanel defaultSize={60} minSize={10}>
              <CodePanel />
            </ResizablePanel>
            <ResizableHandle className="w-1 bg-secondary" />
            <ResizablePanel defaultSize={40} minSize={10}>
              <IoPanel />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </main>
    </div>
  );
}
