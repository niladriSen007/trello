import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4  bg-[#0C0928]">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button  className="mt-6  bg-gradient-to-l shadow-xl from-fuchsia-600 to-violet-700 rounded-lg" size="sm" >
            Privacy Policy
          </Button>
          <Button  className="mt-6  bg-gradient-to-l shadow-xl from-fuchsia-600 to-violet-700 rounded-lg" size="sm" >
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};