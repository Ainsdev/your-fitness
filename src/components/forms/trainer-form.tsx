"use client";

import { formatRut } from "rut-validator-formatter";
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
import { doPasswordReset } from "../../app/_actions/password-reset";
import { Link, Loader } from "lucide-react";
import LocationInput from "../location-popover";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { accountbank_sbif_third, type_accounts } from "@/config/payments";
import { trainerForm } from "@/lib/schemas";
import { doTrainerForm } from "@/app/_actions/trainer-form";

type NewTrainerInfo = {
  email: string | undefined;
  name: string;
  phone: string;
};

type FormValue = z.infer<typeof trainerForm>;

export const NewTrainerForm = (props: NewTrainerInfo) => {
  const [location, setLocation] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const form = useForm<FormValue>({
    resolver: zodResolver(trainerForm),
    defaultValues: {
      email: props.email,
      location: location,
    },
  });

  const onSubmit = async (values: FormValue) => {
    setIsSubmitting(true);
    try {
      await doTrainerForm(values)
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(values, null, 2)}
            </code>
          </pre>
        ),
      });
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
      <form
        className="flex flex-col justify-center items-center w-full p-1 z-40"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Carousel className="w-full max-w-xl flex flex-col gap-6 py-6 ">
          <CarouselContent className="p-1">
            <CarouselItem key={1}>
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  defaultValue={props.email}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your@fitness.com"
                        />
                      </FormControl>
                      <FormDescription>
                        Tu email no puede ser modificado.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  defaultValue={props.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Juan Alfonso"
                        />
                      </FormControl>
                      <FormDescription>Tu Nombre o Apodo</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefono</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          maxLength={9}
                          max={10}
                          type="text"
                          placeholder="982196631"
                        />
                      </FormControl>
                      <FormDescription>No incluyas (+56)</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="rut"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rut</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          required
                          maxLength={12}
                          placeholder="17.171.171-8"
                          {...field}
                          onChange={(e) => {
                            e.target.value = formatRut(e.target.value);
                            field.onChange(e);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Comuna</FormLabel>
                      <FormControl>
                        <LocationInput
                          value={location}
                          setValue={(value) => {
                            setLocation(value);
                            const event = {
                              target: {
                                name: field.name,
                                value: value,
                              },
                            };
                            field.onChange(event);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={2}
              className="flex flex-col gap-4 justify-center items-center"
            >
              <h1 className="text-xl font-senmibold">Datos Bancarios</h1>
              <FormField
                control={form.control}
                name="bank.accountbank_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Juan Alfonso Valenzuela Cardenas"
                      />
                    </FormControl>
                    <FormDescription>Nombre Titular de cuenta</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bank.accountbank_sbif"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Banco</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un Banco" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent side="top" className="h-48 2xl:h-max">
                        {accountbank_sbif_third.map((bank) => (
                          <SelectItem key={bank.id} value={bank.id.toString()}>
                            <div className="flex items-center gap-2">
                              <span>{bank.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bank.accountbank_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Cuenta</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opcion" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent side="top">
                        {type_accounts.map((type) => (
                          <SelectItem key={type.id} value={type.id.toString()}>
                            <div className="flex items-center gap-2">
                              <span>{type.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bank.accountbank_num"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numero Cuenta</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="12312312312" />
                    </FormControl>
                    <FormDescription>
                      Numero de tu cuenta bancaria
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="p-4">
                <Button
                  className="w-max z-50 drop-shadow-[0_20px_50px_rgba(6,_260,_81,_0.07)] hover:drop-shadow-[0_20px_45px_rgba(6,_260,_81,_0.1)]"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loader /> : "Convertirme en Trainer"}
                </Button>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex relative">
            <CarouselPrevious className="left-5" />
            <CarouselNext
              className="right-5"
              variant="secondary"
              size="default"
            >
              Continuar
            </CarouselNext>
          </div>
        </Carousel>
      </form>
    </Form>
  );
};
