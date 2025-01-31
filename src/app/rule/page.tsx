"use client";
import React from "react";
import Title from "../components/modules/Title";
import { rules } from "@/staticData";
import Hr from "../components/modules/Hr";

type RuleProps = {
  title: string;
  description: string;
};

const Rule: React.FC<RuleProps> = ({ title, description }) => (
  <div className="flex flex-col">
    <Title title={title} />
    <p className="text-[1.6rem] font-light">{description}</p>
  </div>
);

const Page: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-20 pt-40 pb-24 px-8 md:px-40">
      {rules.map((rule, index) => (
        <Rule key={index} title={rule.title} description={rule.description} />
      ))}
      <Hr />
    </div>
  );
};

export default Page;
