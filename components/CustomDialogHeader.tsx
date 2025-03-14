"use client";

import { DialogHeader, DialogTitle } from "./ui/dialog";

interface CustomDialogHeaderProps {
  title?: string;
  subTitle?: string;
  icon?: React.ReactNode;

  iconClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}

const CustomDialogHeader = ({
  icon,
  title,
  subTitle,
}: CustomDialogHeaderProps) => {
  return (
    <DialogHeader className="py-6">
      <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2"></div>
      </DialogTitle>
    </DialogHeader>
  );
};

export default CustomDialogHeader;
