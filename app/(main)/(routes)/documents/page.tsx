"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { Button } from '@/components/ui/button';

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create);
    const onCreate = () => {
        const promise = create({ title: "Title goes here..." });

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "Note created",
            error: "New Note creation failed"
        });
    }

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image 
                src="/empty-light-2.png"
                height="500"
                width="500"
                alt="Empty Placeholder"
                className="dark:hidden"
            />

            <Image 
                src="/empty-dark-2.png"
                height="500"
                width="500"
                alt="Empty Placeholder"
                className="hidden dark:block"
            />

            <h2 className="text-lg font-medium">
                Welcome to {user?.username}&apos;s Page
            </h2>
            
            <Button onClick={onCreate} size="lg" className="text-white text-md bg-gradient-to-r from-green-700 via-green-600 to-green-600 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg px-10 py-5 text-center mb-2">
                {/* <PlusCircle className="h-5 w-5 mr-2" /> */}
                Create
            </Button>
        </div>
    );
}
 
export default DocumentsPage;