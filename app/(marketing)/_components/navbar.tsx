"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";
import { Link } from "lucide-react";

export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();
    
    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#1C1C1C] border-b-2 border-emerald-600 fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-2xl"
        )}>
            <Logo />

            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (
                    <Spinner size="lg" />
                )}

                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button className="bg-black border-b-4 border-emerald-600 dark:bg-white">Login</Button>
                        </SignInButton>

                        <SignInButton mode="modal">
                            <Button className="bg-black border-b-4 border-green-600 dark:bg-white">Get PrimaVera</Button>
                        </SignInButton>
                    </>
                )}

                {isAuthenticated && !isLoading && (
                    <>
                        <Button className="text-black" variant="ghost" size="sm" asChild>
                            <Link href="/documents">
                                Enter
                            </Link>
                        </Button>

                        <UserButton afterSignOutUrl="/" />
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    );
};
 
export default Navbar;