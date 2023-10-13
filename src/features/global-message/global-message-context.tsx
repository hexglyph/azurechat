import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { createContext, useContext } from "react";

interface GlobalMessageProps {
  showError: (error: string, reload?: () => void) => void;
  showSuccess: (message: MessageProp) => void;
}

const GlobalMessageContext = createContext<GlobalMessageProps | null>(null);

interface MessageProp {
  title: string;
  description: string;
}

export const GlobalMessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const showError = (error: string, reload?: () => void) => {
    toast({
      variant: "destructive",
      description: error,
      action: reload ? (
        <ToastAction
          altText="Tente novamente"
          onClick={() => {
            reload();
          }}
        >
          Tente novamente
        </ToastAction>
      ) : undefined,
    });
  };

  const showSuccess = (message: MessageProp) => {
    toast(message);
  };

  return (
    <GlobalMessageContext.Provider
      value={{
        showSuccess,
        showError,
      }}
    >
      {children}
    </GlobalMessageContext.Provider>
  );
};

export const useGlobalMessageContext = () => {
  const context = useContext(GlobalMessageContext);
  if (!context) {
    throw new Error("GlobalErrorContext is null");
  }

  return context;
};
