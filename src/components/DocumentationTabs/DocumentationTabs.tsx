'use client'

import { FC } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/Tabs";
import SimpleBar from 'simplebar-react'
import Code from "@/ui/Code";
import { nodejs, python } from "@/helpers/documentation-code";

interface IDocumentationTabsProps {}

const DocumentationTabs: FC<IDocumentationTabsProps> = ({}) => {
  return (
    <Tabs defaultValue='nodejs' className="w-full max-w-2xl" >
      <TabsList>
        <TabsTrigger value='nodejs' >NodeJs</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar>
        <Code animated language="javascript" code={nodejs} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
      <SimpleBar>
      <Code animated language="python" code={python} show />
      </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
