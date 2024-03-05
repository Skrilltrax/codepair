import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export default function StartMenu() {
  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link href="/public" legacyBehavior passHref>
          <NavigationMenuLink className="font-semibold">
            CodePair
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}
