import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background dark:bg-[#1C1C1C] z-50">
            <Logo />

            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button className="bg-emerald-600 text-white font-semibold">
                    Privacy Policies
                </Button>

                <Button className="bg-emerald-600 text-white font-semibold">
                    Terms & Conditions
                </Button>
            </div>
        </div>
    );
}
 
export default Footer;