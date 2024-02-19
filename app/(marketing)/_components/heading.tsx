"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold mt-6">All your Ideas, Files, Notes, Plans in one place 
                <span className="text-emerald-600 px-0.5 py-0 rounded-md  ml-2 mt-10">PrimaVera</span>
            </h1>

            <h3 className="text-base sm:text-xl md:text-2xl font-medium">PrimaVera facilitates a collaborative workspace <br />
            where work is enhanced, leading to efficiency
            </h3>

            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}

            {isAuthenticated && !isLoading && (
                <Button asChild className="p-6 border-b-4 border-emerald-600 text-lg">
                    <Link href="/documents">
                        Start
                        <ArrowRight className="h-6 w-6 ml-2" />
                    </Link>
                </Button>
            )}

            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button className="border-b-4 border-yellow-500">
                        Get PrimaVera
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}