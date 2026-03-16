
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from "@/components/ui/sonner";
import { useTheme } from 'next-themes';
import Animable from "@/components/Animable.tsx";

const ContactSection = () => {
  const { theme } = useTheme();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Сообщение отправлено", {
      description: "Наш менеджер свяжется с вами в ближайшее время",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-navy/20">
      <div className="container mx-auto px-4">
        <Animable>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">
              Связаться с Нами
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Есть вопросы или хотите сделать заказ? Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
        </Animable>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-up bg-white dark:bg-navy/30 rounded-xl shadow-md p-8">
            <Animable index={1}>
              <h3 className="text-2xl font-semibold text-navy-dark dark:text-white mb-6">Напишите нам</h3>
            </Animable>

            <Animable index={2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Имя</label>
                  <Input 
                    id="name" 
                    placeholder="Ваше имя" 
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Телефон</label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+998 __ ___ __ __" 
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="ваш@email.com" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Сообщение</label>
                <Textarea 
                  id="message" 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-wood hover:bg-wood-dark text-white"
              >
                <Send size={18} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
            </Animable>
          </div>
          
          <div className="space-y-8">
            <div className="animate-fade-up bg-white dark:bg-navy/30 rounded-xl shadow-md p-8">
              <Animable index={3}>
              <h3 className="text-2xl font-semibold text-navy-dark dark:text-white mb-6">Контактная информация</h3>
              </Animable>

              <Animable index={4}>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone className="text-wood mt-1 mr-4" size={22} />
                  <div>
                    <p className="font-medium text-navy-dark dark:text-gray-100">Телефон</p>
                    <p className="text-gray-600 dark:text-gray-300">+998 71 202 40 40</p>
                    <p className="text-gray-600 dark:text-gray-300">+998 90 123 45 67</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="text-wood mt-1 mr-4" size={22} />
                  <div>
                    <p className="font-medium text-navy-dark dark:text-gray-100">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">info@mebelcity.uz</p>
                    <p className="text-gray-600 dark:text-gray-300">sales@mebelcity.uz</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-wood mt-1 mr-4" size={22} />
                  <div>
                    <p className="font-medium text-navy-dark dark:text-gray-100">Адрес</p>
                    <p className="text-gray-600 dark:text-gray-300">г. Ташкент, ул. Шота Руставели, 15А</p>
                    <p className="text-gray-600 dark:text-gray-300">Ориентир: ТЦ "Grand Plaza"</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="text-wood mt-1 mr-4" size={22} />
                  <div>
                    <p className="font-medium text-navy-dark dark:text-gray-100">Время работы</p>
                    <p className="text-gray-600 dark:text-gray-300">Пн-Сб: 10:00 - 20:00</p>
                    <p className="text-gray-600 dark:text-gray-300">Вс: 10:00 - 18:00</p>
                  </div>
                </li>
              </ul>
              </Animable>
            </div>

            <Animable index={5}>
            <div className="animate-fade-up bg-white dark:bg-navy/30 rounded-xl shadow-md p-8 h-64">
              <h3 className="text-xl font-semibold text-navy-dark dark:text-white mb-4">Карта</h3>
              <div className="w-full h-40 bg-gray-200 dark:bg-navy/50 rounded-lg relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Карта загружается...</p>
                </div>
              </div>
            </div>
            </Animable>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
