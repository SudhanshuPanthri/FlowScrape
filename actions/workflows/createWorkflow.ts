"use server";
import createWorkflowSchema from "@/schema/workflows";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { WorkflowStatus } from "@/types/workflow";
import { redirect } from "next/navigation";

const CreateWorkflow = async (form: z.infer<typeof createWorkflowSchema>) => {
  const { success, data } = createWorkflowSchema.safeParse(form);
  if (!success) {
    throw new Error("Invalid form data");
  }

  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: "TODO",
      ...data,
    },
  });

  if (!result) {
    throw new Error("Failed to create workflow");
  }

  redirect(`/workflows/editor/${result.id}`);
};

export default CreateWorkflow;
