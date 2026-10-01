"use client";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export function ModalWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  
  return (
    <Dialog defaultOpen onOpenChange={(open) => !open && router.back()}>
      <DialogContent className="max-w-2xl bg-card border-border/60 max-h-[85vh] overflow-y-auto sm:rounded-xl">
        <DialogTitle className="sr-only">Case Study</DialogTitle>
        <DialogDescription className="sr-only">Case Study details</DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}
