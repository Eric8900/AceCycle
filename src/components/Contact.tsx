"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "./ui/use-toast";
import { Toaster } from "./ui/toaster";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Enter a name!",
  }),
  email: z.string().min(1, { 
    message: "This field has to be filled!" 
  }).email("This is not a valid email."),
  message: z.string().min(1, {
    message: "Enter a message!",
  }),
})

function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    const serviceId = 'service_u5kj237';
    const templateId = 'template_98js0w9';
    const publicKey = '-021-25NyMpIQSKaa';
    emailjs.send(serviceId, templateId, values, publicKey).then(() => {
      form.reset();
      toast({
        title: "Email sent!",
        description: "Your message has been successfully sent.",
      });
    });
  }
  return (
    <>
    <img src="/blurry-gradient-haikei.svg" className="absolute w-full h-screen object-cover z-[-1] border-b-[1px] border-lime-400"/>
    <div className="h-screen flex justify-center items-center flex-col">
    <div className="m-16 text-center">
    <h1 className="text-gray-800 md:text-9xl text-7xl font-extrabold">Contact Us</h1>
    <p className="opacity-80 text-gray-700 md:text-xl text-lg">Any questions or concerns?</p>
    </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-4/5 lg:w-3/5 rounded-2xl border-2 shadow-2xl lg:py-10 lg:px-24 py-4 px-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
    </div>
    <Toaster />
    </>
  )
}

export default Contact