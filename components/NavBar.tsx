import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { auth } from "@/auth";
import { CircleUserRound, Menu, Settings, } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const NavBar = async () => {
  const session = await auth();

  return (
    <div className="sticky top-0 w-screen flex justify-between items-center px-5 py-4">
      <Link href={'/'} className="font-bold text-lg">Logo</Link>
      {!session ?
        <div className="flex gap-5 items-center">
          <ModeToggle />
          <Link href="/auth/login">
            <Button variant={'outline'} type="submit">Login</Button>
          </Link>
          <Link href="/auth/register">
            <Button variant={'default'} type="submit">Register</Button>
          </Link>
        </div>
        :
        <div className="flex gap-5 items-center">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={'/account'} className="flex items-center gap-2">
                  <CircleUserRound className="h-5 w-5" />
                  <span>Account</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/settings'} className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              {/*  <DropdownMenuItem>Subscription</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      }
    </div>
  );
};

export default NavBar;