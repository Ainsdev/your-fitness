"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "@/components/ui/use-toast";
import { isAppError } from "@/lib/error-code";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { doPasswordReset } from "./actions";
import { Loader } from "lucide-react";

const schema = z.object({
  email: z.string().email(),
});

type FormValue = z.infer<typeof schema>;

export const PasswordResetForm = () => {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm<FormValue>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: FormValue) => {
    setIsSubmitting(true);
    try {
      await doPasswordReset(values.email);
      router.push("/auth/password-reset/success");
    } catch (error) {
      if (isAppError(error)) {
        return toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }

      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="your@fitness.com" />
              </FormControl>
              <FormDescription>
                Te enviaremos un link para restablecer tu contraseña.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader/>: "Enviar Link"}
        </Button>
      </form>
    </Form>
  );
};
