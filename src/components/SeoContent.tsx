import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n/context';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem { q: string; a: string; }

const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3 mt-6">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 dark:border-navy rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-navy-dark dark:text-white hover:bg-gray-50 dark:hover:bg-navy/40 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            {open === i ? <ChevronUp className="h-4 w-4 shrink-0 text-emerald-600" /> : <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" />}
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const SeoContent = () => {
  const { language } = useLanguage();

  if (language === 'uz') {
    return (
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark dark:text-white mb-6">
              Toshkentda ofis mebellari — MebelCity
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>MebelCity</strong> — Toshkentdagi yetakchi ofis mebellari ishlab chiqaruvchisi va yetkazib beruvchisi.
              15 yildan ortiq tajriba bilan biz O'zbekiston bo'ylab minglab ofislarni jihozladik. Bizning assortimentimizda
              ofis stollari, javonlar, kreslar va to'liq ofis mebellari to'plamlari mavjud.
            </p>
            <h3 className="text-xl font-semibold text-navy-dark dark:text-white mb-3">
              Nega MebelCity'ni tanlashadi?
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              <li>O'z ishlab chiqarishimiz — vositachilarsiz to'g'ridan-to'g'ri narxlar</li>
              <li>O'zbekiston bo'ylab yetkazib berish</li>
              <li>Individual dizayn va buyurtma asosida tayyorlash</li>
              <li>Barcha mahsulotlarga 1 yillik kafolat</li>
              <li>1000+ mamnun mijozlar</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Biz har bir ofis uchun mukammal yechimni topishga yordam beramiz — kichik startapdan tortib yirik korporativ
              ofislargacha. <Link to="/ofisnaya-mebel" className="text-emerald-600 hover:text-emerald-800 font-medium">Katalogimizni ko'ring</Link> yoki
              {' '}<Link to="/contact" className="text-emerald-600 hover:text-emerald-800 font-medium">biz bilan bog'laning</Link> — bepul maslahat beramiz.
            </p>

            <h3 className="text-xl font-semibold text-navy-dark dark:text-white mb-3 mt-8">
              Ko'p so'raladigan savollar
            </h3>
            <FaqAccordion items={[
              { q: "MebelCity'da mebel qanday buyurtma qilinadi?", a: "Telefon orqali (+998 90 183 22 33) yoki saytdagi forma orqali bog'laning. Bepul maslahat va o'lchov olish uchun mutaxassisimiz siz bilan bog'lanadi." },
              { q: "Mebel yetkazib berish qancha turadi?", a: "Toshkent bo'ylab yetkazib berish bepul. O'zbekistonning boshqa shaharlariga yetkazib berish narxi individual hisoblanadi." },
              { q: "Ofis mebellariga kafolat bormi?", a: "Ha, barcha mahsulotlarimizga 1 yillik kafolat beriladi. Ishlab chiqarish nuqsonlari bepul tuzatiladi." },
              { q: "Maxsus o'lchamlarda mebel buyurtma qilish mumkinmi?", a: "Ha, biz individual o'lchamlarda va dizaynlarda mebel tayyorlaymiz. Mutaxassisimiz siz bilan bog'lanib, barcha tafsilotlarni muhokama qiladi." },
              { q: "To'lov qanday amalga oshiriladi?", a: "Naqd pul, bank kartasi yoki bank o'tkazmasi orqali to'lash mumkin. Katta buyurtmalar uchun bo'lib to'lash imkoniyati mavjud." },
            ]} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-dark dark:text-white mb-6">
            Офисная мебель в Ташкенте от производителя — MebelCity
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>MebelCity</strong> — ведущий производитель и поставщик офисной мебели в Ташкенте с более чем
            15-летним опытом работы. Мы оснастили тысячи офисов по всему Узбекистану качественной и стильной
            мебелью. В нашем ассортименте представлены офисные столы, шкафы, кресла и комплекты мебели для офиса
            любого размера — от небольшого стартапа до крупного корпоративного пространства.
          </p>

          <h3 className="text-xl font-semibold text-navy-dark dark:text-white mb-3">
            Почему выбирают офисную мебель MebelCity?
          </h3>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
            <li><strong>Собственное производство</strong> — прямые цены без посредников</li>
            <li><strong>Доставка по Узбекистану</strong> — быстрая и надёжная логистика</li>
            <li><strong>Индивидуальный дизайн</strong> — мебель на заказ по вашим размерам и стилю</li>
            <li><strong>Гарантия 1 год</strong> — на все изделия офисной мебели</li>
            <li><strong>1000+ довольных клиентов</strong> — проверенное качество и надёжность</li>
          </ul>

          <h3 className="text-xl font-semibold text-navy-dark dark:text-white mb-3">
            Купить офисную мебель в Ташкенте
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Мы предлагаем полный спектр офисной мебели: от рабочих столов и эргономичных кресел до
            книжных шкафов и полных комплектов для переговорных комнат. Каждое изделие создаётся
            с использованием качественных материалов и современного оборудования.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Посмотрите наш{' '}
            <Link to="/ofisnaya-mebel" className="text-emerald-600 hover:text-emerald-800 font-medium">
              каталог офисной мебели
            </Link>{' '}
            или{' '}
            <Link to="/contact" className="text-emerald-600 hover:text-emerald-800 font-medium">
              свяжитесь с нами
            </Link>{' '}
            для бесплатной консультации. Мы находимся в Ташкенте и осуществляем доставку по всей
            территории Узбекистана.
          </p>

          <h3 className="text-xl font-semibold text-navy-dark dark:text-white mb-3">
            Наши категории офисной мебели
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            <Link to="/ofisnaya-mebel" className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="text-navy-dark dark:text-white font-medium">Офисные столы</span>
            </Link>
            <Link to="/ofisnaya-mebel" className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="text-navy-dark dark:text-white font-medium">Офисные шкафы</span>
            </Link>
            <Link to="/ofisnaya-mebel" className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="text-navy-dark dark:text-white font-medium">Комплекты мебели</span>
            </Link>
            <Link to="/ofisnaya-mebel" className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="text-navy-dark dark:text-white font-medium">Офисные кресла</span>
            </Link>
            <Link to="/ofisnaya-mebel" className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="text-navy-dark dark:text-white font-medium">Журнальные столики</span>
            </Link>
            <Link to="/gallery" className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <span className="text-navy-dark dark:text-white font-medium">Галерея работ</span>
            </Link>
          </div>

          {/* FAQ Section — visible to users and crawled by Google */}
          <h3 className="text-xl font-semibold text-navy-dark dark:text-white mb-1">
            Часто задаваемые вопросы
          </h3>
          <FaqAccordion items={[
            { q: "Как заказать мебель в MebelCity?", a: "Свяжитесь с нами по телефону +998 90 183 22 33 или через форму на сайте. Наш специалист свяжется с вами для бесплатной консультации и замера." },
            { q: "Сколько стоит доставка мебели?", a: "Доставка по Ташкенту — бесплатно. В другие города Узбекистана стоимость рассчитывается индивидуально в зависимости от объёма." },
            { q: "Есть ли гарантия на офисную мебель?", a: "Да, на всю нашу продукцию предоставляется гарантия 1 год. Производственные дефекты устраняются бесплатно." },
            { q: "Можно ли заказать мебель по индивидуальным размерам?", a: "Да, мы изготавливаем мебель по индивидуальным размерам и дизайну. Наш специалист свяжется с вами для обсуждения всех деталей." },
            { q: "Какие способы оплаты доступны?", a: "Принимаем оплату наличными, банковской картой и банковским переводом. Для крупных заказов доступна рассрочка." },
            { q: "Сколько времени занимает изготовление мебели на заказ?", a: "Стандартный срок изготовления — от 7 до 21 рабочих дней в зависимости от сложности и объёма заказа." },
          ]} />
        </div>
      </div>
    </section>
  );
};

export default SeoContent;

