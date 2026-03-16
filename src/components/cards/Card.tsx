
import React, { useState } from 'react';
import { Pencil, Trash2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card as UICard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export interface CardData {
  id: string;
  title: string;
  description: string;
  image?: string;
  tag?: string;
  createdAt: number;
}

interface CardProps {
  card: CardData;
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedCard: CardData) => void;
}

export const Card: React.FC<CardProps> = ({ card, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState<CardData>(card);
  const { toast } = useToast();

  const handleDelete = () => {
    onDelete(card.id);
    toast({
      title: "Card Deleted",
      description: "The card has been successfully deleted",
      variant: "destructive",
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedCard(card);
  };

  const handleSave = () => {
    if (editedCard.title.trim() === '') {
      toast({
        title: "Error",
        description: "Title cannot be empty",
        variant: "destructive",
      });
      return;
    }
    
    onEdit(card.id, editedCard);
    setIsEditing(false);
    
    toast({
      title: "Card Updated",
      description: "The card has been successfully updated",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditedCard({
      ...editedCard,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <UICard className="w-full max-w-sm transition-all duration-300 border-wood/20 hover:shadow-md animate-fade-in dark:bg-navy-dark/80">
      {isEditing ? (
        // Edit Mode
        <>
          <CardHeader>
            <Input
              name="title"
              value={editedCard.title}
              onChange={handleChange}
              placeholder="Card Title"
              className="mb-2 font-medium"
            />
            <Input
              name="tag"
              value={editedCard.tag || ''}
              onChange={handleChange}
              placeholder="Tag (optional)"
              className="text-sm"
            />
          </CardHeader>
          <CardContent>
            <Textarea
              name="description"
              value={editedCard.description}
              onChange={handleChange}
              placeholder="Card Description"
              className="min-h-[100px]"
            />
            <Input
              name="image"
              value={editedCard.image || ''}
              onChange={handleChange}
              placeholder="Image URL (optional)"
              className="mt-2"
            />
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={handleCancel}>
              <X className="mr-1 h-4 w-4" />
              Cancel
            </Button>
            <Button size="sm" onClick={handleSave}>
              <Check className="mr-1 h-4 w-4" />
              Save
            </Button>
          </CardFooter>
        </>
      ) : (
        // View Mode
        <>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="font-playfair">{card.title}</CardTitle>
              {card.tag && (
                <Badge variant="outline" className="bg-wood/10 text-wood dark:bg-wood/20 dark:text-wood-light">
                  {card.tag}
                </Badge>
              )}
            </div>
            <CardDescription className="text-sm text-muted-foreground mt-1">
              {new Date(card.createdAt).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {card.image && (
              <div className="mb-4 overflow-hidden rounded-md">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                    toast({
                      title: "Image Error",
                      description: "Could not load image",
                      variant: "destructive",
                    });
                  }}
                />
              </div>
            )}
            <p className="text-sm whitespace-pre-wrap">{card.description}</p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={handleEdit}>
              <Pencil className="mr-1 h-4 w-4" />
              Edit
            </Button>
            <Button variant="destructive" size="sm" onClick={handleDelete}>
              <Trash2 className="mr-1 h-4 w-4" />
              Delete
            </Button>
          </CardFooter>
        </>
      )}
    </UICard>
  );
};
