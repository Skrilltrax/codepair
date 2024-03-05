import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function EndMenu() {
  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        <ModeToggle />
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Avatar>
          <AvatarImage src="https://github.com/skrilltrax.png" />
        </Avatar>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}
