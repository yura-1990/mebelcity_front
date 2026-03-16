
import React, { useState, useEffect } from 'react';
import { Card, CardData } from './Card';
import { CardForm } from './CardForm';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LOCAL_STORAGE_KEY = 'mebelcity-cards';

export const CardsContainer: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  // Load cards from local storage
  useEffect(() => {
    try {
      const storedCards = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedCards) {
        setCards(JSON.parse(storedCards));
      }
    } catch (error) {
      console.error('Failed to load cards from local storage:', error);
      toast({
        title: "Error",
        description: "Failed to load saved cards",
        variant: "destructive",
      });
    }
  }, []);

  // Save cards to local storage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
    } catch (error) {
      console.error('Failed to save cards to local storage:', error);
      toast({
        title: "Error",
        description: "Failed to save cards",
        variant: "destructive",
      });
    }
  }, [cards]);

  const handleAddCard = (newCard: CardData) => {
    setCards([...cards, newCard]);
    setIsDialogOpen(false);
  };

  const handleDeleteCard = (id: string) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const handleEditCard = (id: string, updatedCard: CardData) => {
    setCards(cards.map(card => card.id === id ? updatedCard : card));
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-playfair font-bold mb-4 md:mb-0 dark:text-white">
          My Cards Collection
        </h1>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-wood hover:bg-wood-dark text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add New Card
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <CardForm onAddCard={handleAddCard} />
          </DialogContent>
        </Dialog>
      </div>

      {cards.length === 0 ? (
        <div className="text-center py-12 bg-muted/20 rounded-lg border border-dashed">
          <p className="text-lg text-muted-foreground">No cards yet. Click "Add New Card" to create one.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.sort((a, b) => b.createdAt - a.createdAt).map(card => (
            <Card 
              key={card.id} 
              card={card} 
              onDelete={handleDeleteCard} 
              onEdit={handleEditCard} 
            />
          ))}
        </div>
      )}
    </div>
  );
};
