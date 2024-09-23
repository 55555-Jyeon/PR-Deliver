import { ReactNode } from "react";

export type StepTemplateProps = {
  index: number;
  stepDesc: string;
  imageSrc: string;
  imageHeight: number;
  imageDesc?: string;
};

export type TabLayoutProps = {
  title: string;
  icon: string;
  content: string;
  tabTitle1: string;
  tabTitle2: string;
  children: [ReactNode, ReactNode];
};

export type TabMenuProps = {
  tabTitle: string;
  isSelected: boolean;
};
