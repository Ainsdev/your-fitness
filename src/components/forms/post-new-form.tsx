"use client";
import {
  CardContent,
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CalendarIcon, GlobeIcon, LocateIcon, TwitterIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { z } from "zod";
import { newTrainerPost } from "@/lib/schemas";
import * as React from "react";
import { FileWithPreview } from "@/lib/types";
import { useForm } from "react-hook-form";
import { isArrayOfFile } from "@/lib/utils";
import { addPost } from "@/app/_actions/post";
import { isAppError } from "@/lib/error-code";
import { toast } from "../ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  UncontrolledFormMessage,
} from "@/components/ui/form";
import { Zoom } from "../zoom-image";
import { FileDialog } from "../file-dialog";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { categoriesList } from "@/config/categories";
import { Textarea } from "../ui/textarea";
import { ButtonUpload } from "../button-upload";
import LocationInput from "../location-popover";

type FormValue = z.infer<typeof newTrainerPost>;
const { useUploadThing } = generateReactHelpers<OurFileRouter>();

export default function PostNewComponent({
  params,
}: {
  params: {
    image: string;
    name: string;
    location: string;
  };
}) {
  const [files, setFiles] = React.useState<FileWithPreview[] | null>(null);
  const [location, setLocation] = React.useState(params.location);
  const [isPending, setIsPending] = React.useState(false);
  const { isUploading, startUpload } = useUploadThing("postImage");

  const form = useForm<FormValue>({
    defaultValues: {
      category: "",
      subcategory: "",
      title: "",
      bio: "",
      credits: 0,
      course_info: "",
      default_days: 2,
      default_hours: 2,
      experience: 1,
      free_days: 1,
      images: [],
      location: params.location,
      methodology: "",
      social_medias: "",
    },
  });

  function onSumbit(data: FormValue) {
    setIsPending(true);
    try {
      // await checkProduct({
      //   name: data.name,
      // })
      if (isArrayOfFile(data.images)) {
        startUpload(data.images)
          .then((res) => {
            const formattedImages = res?.map((image) => ({
              id: image.key,
              name: image.key.split("_")[1] ?? image.key,
              url: image.url,
            }));
            return formattedImages;
          })
          .then((images) => {
            return addPost({
              ...data,
              images: images,
            });
          });
        toast({
          title: "Se ha creado con exito!!!",
          description:
            "Comparte tu publicacion para que mas personas puedan verla",
        });
      } else {
        return addPost({
          ...data,
          images: [
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww",
          ],
        });
      }
      form.reset();
      setFiles(null);
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
        description: "Algo salio mal, intenta nuevamente",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Form {...form}>
      <form
        key="1"
        className="flex justify-center py-10 flex-col md:flex-row w-full items-center p-1 z-40 overflow-y-scroll"
      >
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 w-full">
          <Card className="md:w-1/2 relative h-max">
            <CardContent className="p-4 space-y-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titulo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Este es el titulo que veran todos."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="course_info"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripcion</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Escribe una descripcion, que incluye, que no incluye, que..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem className="flex w-full flex-col gap-1.5">
                <FormLabel>Imagenes</FormLabel>
                {files?.length ? (
                  <div className="flex items-center gap-2">
                    {files.map((file, i) => (
                      <Zoom key={i}>
                        <Image
                          src={file.preview}
                          alt={file.name}
                          className="h-20 w-20 shrink-0 rounded-md object-cover object-center"
                          width={80}
                          height={80}
                        />
                      </Zoom>
                    ))}
                  </div>
                ) : null}
                <FormControl>
                  <FileDialog
                    setValue={form.setValue}
                    name="images"
                    maxFiles={3}
                    maxSize={1024 * 1024 * 4}
                    files={files}
                    setFiles={setFiles}
                    isUploading={isUploading}
                    disabled={isPending}
                  />
                </FormControl>
                <UncontrolledFormMessage
                  message={form.formState.errors.images?.message}
                />
              </FormItem>
            </CardContent>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="font-medium flex gap-2">
                <Avatar className="h-9 w-9">
                  <AvatarImage alt="profile img" src={params.image} />
                  <AvatarFallback>
                    {params.name
                      .split(" ")
                      .map((name) => name[0].toUpperCase())}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-2">
                  <span>{params.name}</span>
                  Cambiar Imagen
                </div>
              </div>
              <div className="grid gap-0.5 text-xs">
                <div className="text-muted-foreground">
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Input placeholder="Personal Trainer" {...field} />
                        </FormControl>
                        <FormDescription>
                          Coloca tu especialidad
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </Card>
          <div className="md:w-1/2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detalles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Categoria</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={(value: typeof field.value) =>
                            field.onChange(value)
                          }
                        >
                          <FormControl>
                            <SelectTrigger className="capitalize">
                              <SelectValue placeholder={field.value} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              {categoriesList.map((category) => (
                                <SelectItem
                                  className="capitalize"
                                  key={category.slug}
                                  value={category.slug}
                                >
                                  {category.title}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subcategory"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>SubCategoria</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={(value: typeof field.value) =>
                            field.onChange(value)
                          }
                        >
                          <FormControl>
                            <SelectTrigger className="capitalize">
                              <SelectValue placeholder={field.value} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categoriesList
                              .find(
                                (category) =>
                                  category.slug === form.watch("category")
                              )
                              ?.subcategories.map((subcategory) => (
                                <SelectItem
                                  className="capitalize"
                                  key={subcategory.slug}
                                  value={subcategory.slug}
                                >
                                  {subcategory.title}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <h3 className="text-lg font-bold">Conf42: DevOps 2024</h3>
                  <div className="flex items-start space-x-2">
                    <LocateIcon className="text-secondary-foreground" />
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
                  <div className="flex items-center space-x-2">
                    <GlobeIcon className="text-secondary-foreground" />
                    <a className="text-blue-600 hover:underline" href="#">
                      https://www.conf42.com/devops2024
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="text-secondary-foreground" />
                    <span>3 dias gratis</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="border-t pt-4"></div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <FormField
                    control={form.control}
                    name="credits"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Precio por sesion</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Introduce el precio mas conveniente"
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Que obtienes?</p>
                <p>
                  Descripcion del curso, que incluye, que no incluye, que...
                </p>
              </CardContent>
              <CardFooter>
                <Button>Comprar</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </form>
    </Form>
  );
}
