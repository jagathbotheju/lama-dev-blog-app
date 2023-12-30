"use client";
import Container from "@/components/Container";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const ContactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email(),
  phone: z.string().min(1, { message: "Phone number is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (formData: z.infer<typeof ContactSchema>) => {
    console.log(formData);
  };

  return (
    <Container className="mt-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 content-center px-4">
        {/* image */}
        <div className="">
          <Image
            src="/contact.png"
            alt="contact image"
            layout="responsive"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>

        {/* form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="name"
                      {...field}
                      className="bg-inherit"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email"
                      {...field}
                      className="bg-inherit"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* phone number */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="phone number"
                      {...field}
                      className="bg-inherit"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="your message"
                      {...field}
                      className="bg-inherit"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default ContactPage;
