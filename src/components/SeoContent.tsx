import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n/context';

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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default SeoContent;
