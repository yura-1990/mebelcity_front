
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { CardData } from './Card';

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().optional(),
  tag: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface CardFormProps {
  onAddCard: (card: CardData) => void;
}

export const CardForm: React.FC<CardFormProps> = ({ onAddCard }) => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
      tag: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    const newCard: CardData = {
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description,
      image: data.image || undefined,
      tag: data.tag || undefined,
      createdAt: Date.now(),
    };
    
    onAddCard(newCard);
    form.reset();
    
    toast({
      title: "Card Added",
      description: "New card has been successfully created",
    });
  };

  return (
    <Card className="w-full max-w-md border-wood/20 shadow-md dark:bg-navy-dark/80">
      <CardHeader>
        <CardTitle className="text-center font-playfair">Add New Card</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter card title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter card description" 
                      className="min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="tag"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tag (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Work, Personal, Ideas" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-wood hover:bg-wood-dark text-white dark:bg-wood dark:hover:bg-wood-dark"
            >
              Add Card
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};
